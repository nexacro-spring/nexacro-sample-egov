package nexacro.sample.test;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import nexacro.sample.service.UserService;
import nexacro.sample.vo.UserVO;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.validation.BeanPropertyBindingResult;
import org.springframework.validation.BindingResult;
import org.springframework.validation.Validator;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;

import com.nexacro.spring.NexacroException;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration(locations = { "classpath*:spring/context-*.xml", "file:src/main/webapp/WEB-INF/config/springmvc/dispatcher-servlet.xml" })
public class UserServiceTest {

	@Resource
	private UserService	userService;

	@Resource
	private Validator	validator;
	
	@InitBinder
	public void initBinder(WebDataBinder dataBinder){
		dataBinder.setValidator(this.validator);
	}

	@Test
	public void testSelectUserVO() {
		List<UserVO> searchVOList = new ArrayList<UserVO>();
		UserVO userVO = new UserVO();
		userVO.setUserName("홍길동");
		userVO.setSearchCondition("NAME");
		searchVOList.add(userVO);

		UserVO searchVo = null;
		if (searchVOList != null && searchVOList.size() > 0) {
			searchVo = searchVOList.get(0);
		}

		List<UserVO> userList = userService.selectUserVOList(searchVo);

		if (userList.size() == 1 && "홍길동".equals(userList.get(0).getUserName())) {
			assertTrue(true);
		} else {
			assertTrue(false);
		}
	}

	@Test
	public void testValidatingModifyUserVO() {
		UserVO userVO = new UserVO(); // 성공
		userVO.setUserName("test1");
		userVO.setUserId("test1");
		userVO.setPassword("test1");
		userVO.setEmail("test1@tobesoft.com");
		assertTrue(validate(userVO));
	}

	@Test
	public void testModifyUserVOWithWrongValues() {
		UserVO userVO = new UserVO();
		userVO.setUserName("testtesttesttesttestttt"); // 이름 20자 초과
		userVO.setUserId("test1");
		userVO.setPassword("test1");
		userVO.setEmail("test1@tobesoft.com");
		assertFalse(validate(userVO));

		userVO.setUserName("test1");
		userVO.setUserId("te"); // 아이디 네 글자 미만
		userVO.setPassword("test1");
		userVO.setEmail("test1@tobesoft.com");
		assertFalse(validate(userVO));

		userVO.setUserName("test1");
		userVO.setUserId("test1");
		userVO.setPassword("te"); // 패스워드 네 글자 미만
		userVO.setEmail("test1@tobesoft.com");
		assertFalse(validate(userVO));

		userVO.setUserName("test1");
		userVO.setUserId("test1");
		userVO.setPassword("te");
		userVO.setEmail("test1tobesoft.com"); // 이메일 유효성 검사 실패
		assertFalse(validate(userVO));
	}

	/**
	 * validate
	 * @param modifyList
	 * @throws NexacroException
	 */
	private boolean validate(UserVO userVO) {
		BindingResult bindingResult = new BeanPropertyBindingResult(userVO, "userVO");
		validator.validate(userVO, bindingResult);
		
		if (bindingResult.hasErrors()) {
			return false;
		} else {
			return true;
		}
	}
}
