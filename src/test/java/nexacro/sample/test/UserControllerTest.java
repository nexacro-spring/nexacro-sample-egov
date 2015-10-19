package nexacro.sample.test;
import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import javax.annotation.Resource;
import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;

import nexacro.sample.service.UserService;
import nexacro.sample.vo.UserVO;

import org.apache.log4j.Logger;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = { "classpath*:spring/context-*.xml" } )
public class UserControllerTest {

	@Resource(name = "userService")
	private UserService	userService;
	
	private static Validator validator;

	@Before
	public void setUp() throws Exception {
		ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
		validator = factory.getValidator();
	}

	@After
	public void tearDown() throws Exception {
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
	public void testModifyUserVO() {
		UserVO[] successUserVO = { 
				new UserVO("test1", "test1", "test1", "test1@tobesoft.com") }; // 성공
			
		UserVO[] failUserVO = { 
				new UserVO("testtesttesttesttest", "test1", "test1", "test1@tobesoft.com"), // 이름 20자 초과
				new UserVO("test1", "te", "test1", "test1@tobesoft.com"), // 아이디 네 글자 미만
				new UserVO("test1", "test1", "te", "test1@tobesoft.com"), // 패스워드 네 글자 미만
				new UserVO("test1", "test1", "test1", "test1tobesoft.com") }; // 이메일 유효성 검사 실패
		
		for (int i = 0; i < successUserVO.length; i++) {
			if (validate(successUserVO[i])) {
				assertTrue(true);
			}
		}
		
		for (int i = 0; i < failUserVO.length; i++) {
			if (!validate(failUserVO[i])) {
				assertFalse(false);
			}
		}
	}

	private boolean validate(UserVO user) {
		Set<ConstraintViolation<UserVO>> constraintViolations = validator.validate(user);
		for (ConstraintViolation<UserVO> constraintViolation : constraintViolations) {
			System.out.println(constraintViolation.getMessage());
			return false;
		}
		return true;
	}
}
