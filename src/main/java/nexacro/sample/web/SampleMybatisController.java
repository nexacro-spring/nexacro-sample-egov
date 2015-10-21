package nexacro.sample.web;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import nexacro.sample.service.SampleService;
import nexacro.sample.vo.SampleVO;
import nexacro.sample.vo.UnitVO;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.spring.annotation.ParamDataSet;
import com.nexacro.spring.annotation.ParamVariable;
import com.nexacro.spring.data.NexacroFirstRowHandler;
import com.nexacro.spring.data.NexacroResult;
import com.nexacro.xapi.data.DataSet;
import com.nexacro.xapi.data.DataSetList;
import com.nexacro.xapi.data.Debugger;
import com.nexacro.xapi.data.PlatformData;
import com.nexacro.xapi.data.Variable;
import com.nexacro.xapi.data.VariableList;
import com.nexacro.xapi.tx.HttpPlatformRequest;
import com.nexacro.xapi.tx.HttpPlatformResponse;

/**
 * <pre>
 * Test를 위한 Controller mybatis Sample Class
 * </pre>
 * 
 * @ClassName   : SampleMybatisController.java
 * @Description : Sample Mybatis Controller Class
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
public class SampleMybatisController {

	private Logger log = LoggerFactory.getLogger(SampleController.class);
	
    @Resource(name = "sampleMybatisService")
    private SampleService sampleMybatisService;
    
    @RequestMapping(value = "/sampleMybatisSelectVO.do")
    public NexacroResult selectMybatisVo(
                            @ParamDataSet(name="ds_search") List<SampleVO> searchVOList
                            , PlatformData platformData){
        
        SampleVO searchVo = null;
        if(searchVOList != null && searchVOList.size() > 0) {
            searchVo = searchVOList.get(0);
        }
        
        List<SampleVO> sampleList = sampleMybatisService.selectSampleVOList(searchVo);
        
        NexacroResult result = new NexacroResult();
        result.addDataSet("output1", sampleList);
        
        return result;
    }
    
}
