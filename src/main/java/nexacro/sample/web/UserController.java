package nexacro.sample.web;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import nexacro.sample.service.UserService;
import nexacro.sample.vo.UserVO;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.spring.annotation.ParamDataSet;
import com.nexacro.spring.data.NexacroResult;
import com.nexacro.spring.servlet.NexacroContext;
import com.nexacro.spring.servlet.NexacroContextHolder;
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

    // @Autowired(required = false) // Type 정의
    @Resource(name = "userService")
    // Name 정의
    private UserService userService;
    
    @RequestMapping(value = "/userSelectVO.do")
    public NexacroResult selectVo(
                            @ParamDataSet(name="ds_search") List<UserVO> searchVOList
                            , @ParamDataSet(name="__DS_PARAM_INFO__") List<Map> defaultList
                            , PlatformData platformData){
        
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
                            @ParamDataSet(name="input1") List<UserVO> modifyList
                            , PlatformData platformData){
        
        if (log.isDebugEnabled()) {
            System.out.println("UserController.modifyVO");
            log.debug("UserController.selectVo(). data="+new Debugger().detail(platformData));
        }
        
        userService.modifyMultiUserVO(modifyList);
        
        NexacroResult result = new NexacroResult();
        
        return result;
    }
 
    
}
