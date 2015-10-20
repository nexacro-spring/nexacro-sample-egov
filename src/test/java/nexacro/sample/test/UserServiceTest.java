package nexacro.sample.test;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

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

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = { "classpath*:spring/context-*.xml" })
public class UserServiceTest {

	@Resource(name = "userService")
	private UserService			userService;

	private static Validator	validator;

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
	 * @param user
	 * @return
	 */
	private boolean validate(UserVO user) {
		Set<ConstraintViolation<UserVO>> constraintViolations = validator.validate(user);
		for (ConstraintViolation<UserVO> constraintViolation : constraintViolations) {
			System.out.println(constraintViolation.getMessage());
			return false;
		}
		return true;
	}
}
