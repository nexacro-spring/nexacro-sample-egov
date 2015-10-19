package nexacro.sample.web;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import nexacro.sample.service.UserService;
import nexacro.sample.vo.UserVO;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BeanPropertyBindingResult;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.validation.Validator;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.spring.NexacroException;
import com.nexacro.spring.annotation.ParamDataSet;
import com.nexacro.spring.context.NexacroContext;
import com.nexacro.spring.context.NexacroContextHolder;
import com.nexacro.spring.data.NexacroResult;
import com.nexacro.xapi.data.Debugger;
import com.nexacro.xapi.data.PlatformData;

/**
 * <pre>
 * Test를 위한 Controller Sample Class
 * </pre>
 * 
 * @ClassName   : SampleController.java
 * @Description : Sample Controller Class
 * @author djkim
 * @since 2012. 1. 31.
 * @version 1.0
 * @see
 * @Modification Information
 * 
 * <pre>
 *     since          author              description
 *  ===========    =============    ===========================
 *  2012. 1. 31.     djkim     최초 생성
 * </pre>
 */
@Controller
public class UserController {

	private static final Logger log = LoggerFactory.getLogger(UserController.class);
	
	// Name 정의
	// @Autowired(required = false) // Type 정의
	@Resource(name = "userService")
	private UserService	userService;

	@Resource
	private Validator	validator;

    @InitBinder
	public void initBinder(WebDataBinder dataBinder){
		dataBinder.setValidator(this.validator);
	}
    
    @RequestMapping(value = "/userSelectVO.do")
	public NexacroResult selectVo(
			@ParamDataSet(name = "ds_search") List<UserVO> searchVOList,
			@ParamDataSet(name = "__DS_PARAM_INFO__") List<Map> defaultList, 
			PlatformData platformData) {
        
        if (log.isDebugEnabled()) {
            System.out.println("UserController.selectVo()");
            log.debug("UserController.selectVo(). data="+new Debugger().detail(platformData));
        }
        
        NexacroContext nexacroContext = NexacroContextHolder.getNexacroContext();
        PlatformData platformData2 = nexacroContext.getPlatformData();
        
        
        UserVO searchVo = null;
        if(searchVOList != null && searchVOList.size() > 0) {
            searchVo = searchVOList.get(0);
        }
        
        List<UserVO> userList = userService.selectUserVOList(searchVo);
        
        NexacroResult result = new NexacroResult();
        result.addDataSet("output1", userList);
        
        return result;
    }
    
	@RequestMapping(value = "/userModifyVO.do")
	public NexacroResult modifyVO(
			@ParamDataSet(name = "input1") List<UserVO> modifyList, 
			PlatformData platformData) {
		
		if (log.isDebugEnabled()) {
			System.out.println("UserController.modifyVO");
			log.debug("UserController.selectVo(). data=" + new Debugger().detail(platformData));
		}
		
		BindingResult bindingResult = null;
		for (UserVO userVO : modifyList) {
			bindingResult = new BeanPropertyBindingResult(userVO, "userVO");
			validator.validate(userVO, bindingResult);
			if (bindingResult.hasErrors()) {
				String errorMessages = getErrorMessages(bindingResult);
				return getNexacroResult(errorMessages);
			}
		}

		userService.modifyMultiUserVO(modifyList);

		NexacroResult result = new NexacroResult();

		return result;
	}
	
	/**
	 * getNexacroResult
	 * @param errorMessages
	 * @return
	 */
	private NexacroResult getNexacroResult(String errorMessages) {
		NexacroException nexacroException = new NexacroException(errorMessages);
		try {
			throw nexacroException;
		} catch (NexacroException e) {
			e.printStackTrace();
		}
		
		NexacroResult nexacroResult = new NexacroResult();
		nexacroResult.setErrorCode(nexacroException.getErrorCode());
		nexacroResult.setErrorMsg(nexacroException.getErrorMsg());
		
		return nexacroResult;
	}

	/**
	 * getErrorMessages
	 * @param bindingResult
	 */
	private String getErrorMessages(BindingResult bindingResult) {
		StringBuffer sb = new StringBuffer();
		
		for (ObjectError error : bindingResult.getAllErrors()) {
			sb.append("code : ").append(error.getCode())
			  .append(", messages : ").append(error.getDefaultMessage()).append("\n");
		}
		
		return sb.toString();
	}
}
