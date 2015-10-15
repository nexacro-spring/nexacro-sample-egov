package nexacro.sample.web;

import javax.annotation.Resource;

import nexacro.sample.service.SampleService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.spring.annotation.ParamDataSet;
import com.nexacro.spring.annotation.ParamVariable;
import com.nexacro.spring.data.NexacroResult;
import com.nexacro.xapi.data.DataSet;
import com.nexacro.xapi.data.Debugger;
import com.nexacro.xapi.data.PlatformData;

/**
 * <pre>
 * Test를 위한 Controller Sample Class
 * </pre>
 * 
 * @ClassName   : SecureController.java
 * @Description : Secure Controller Class
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
public class SecureController {

	private static final Logger log = LoggerFactory.getLogger(SecureController.class);
	
    // @Autowired(required = false) // Type 정의
    @Resource(name = "sampleService")
    // Name 정의
    private SampleService sampleService;
    
    @RequestMapping(value = "/secureSelectVO.do")
     public NexacroResult secureData(
                              @ParamVariable(name="id")  String paramValue
                            , @ParamDataSet(name="dsInput") DataSet dsUnit
                            , PlatformData platformData){
        
        if (log.isDebugEnabled()) {
            System.out.println("SecureController.secureData()");
            log.debug("SecureController.secureData(). data="+new Debugger().detail(platformData));
        }
        
        System.out.println("id: " + paramValue);
        System.out.println("dsInput"+new Debugger().detail(dsUnit));

        NexacroResult result = new NexacroResult();
        return result;
    }
}
