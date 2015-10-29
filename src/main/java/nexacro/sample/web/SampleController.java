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
 * Test를 위한 Controller Sample Class
 * 
 * @author Park SeongMin
 * @since 08.12.2015
 * @version 1.0
 * @see
 */
@Controller
public class SampleController {

	private Logger log = LoggerFactory.getLogger(SampleController.class);
	
    // @Autowired(required = false) // Type 정의
    @Resource(name = "sampleService")
    // Name 정의
    private SampleService sampleService;
    
    @RequestMapping(value = "/sampleSelectVO.do")
    public NexacroResult selectVo(
                            @ParamDataSet(name="ds_search", required=false) List<SampleVO> searchVOList
                            , PlatformData platformData){
        
        if (log.isDebugEnabled()) {
            System.out.println("SampleController.selectVo()");
            log.debug("SampleController.selectVo(). data="+new Debugger().detail(platformData));
        }
        
        SampleVO searchVo = null;
        if(searchVOList != null && searchVOList.size() > 0) {
            searchVo = searchVOList.get(0);
        }
        
        List<SampleVO> sampleList = sampleService.selectSampleVOList(searchVo);
        
        NexacroResult result = new NexacroResult();
        result.addDataSet("output1", sampleList);
        
        return result;
    }
    
    @RequestMapping(value = "/sampleSelectVOFromMap.do")
    public NexacroResult selectVoFromMap(
    		@ParamDataSet(name="ds_search", required=false) List<SampleVO> searchVOList
    		, PlatformData platformData){
    	
    	if (log.isDebugEnabled()) {
    		System.out.println("SampleController.selectVo()");
    		log.debug("SampleController.selectVoFromMap(). data="+new Debugger().detail(platformData));
    	}
    	
    	SampleVO searchVo = null;
    	if(searchVOList != null && searchVOList.size() > 0) {
    		searchVo = searchVOList.get(0);
    	}
    	
    	List<Map> sampleList = sampleService.selectSampleMapList(searchVo);
    	
    	NexacroResult result = new NexacroResult();
    	result.addDataSet("output1", sampleList);
    	
    	return result;
    }
    
    @RequestMapping(value = "/sampleModifyVO.do")
    public NexacroResult modifyVO(
                            @ParamDataSet(name="input1") List<SampleVO> modifyList
                            , PlatformData platformData){
        
        if (log.isDebugEnabled()) {
            System.out.println("SampleController.modifyVO");
            log.debug("SampleController.selectVo(). data="+new Debugger().detail(platformData));
        }
        
        sampleService.modifyMultiSampleVO(modifyList);
        
        NexacroResult result = new NexacroResult();
        
        return result;
    }
    
    @RequestMapping(value = "/test.do")
    public NexacroResult test(
            @ParamDataSet(name="dsUnit") List<UnitVO> unitList
            , @ParamDataSet(name="dsUnit") List<Map> unitMapList
            , @ParamDataSet(name="dsUnit") DataSet dsUnit
            
            , @ParamVariable(name="intValue") int iVar1
            , @ParamVariable(name="intValue") Variable iVar2
            , @ParamVariable(name="stringValue") String sVar1
            , @ParamVariable(name="stringValue") Variable sVar2
            
            , DataSetList dsList
            , VariableList varList
            , PlatformData platformData
            , HttpPlatformRequest platformRequest
            , HttpPlatformResponse platformResponse
            , NexacroFirstRowHandler firstRowHandler
            ){
        
        if (log.isDebugEnabled()) {
            log.debug("debug_message : nexacro supported parameter types..");
        }
        
        // control nexacro result...
        NexacroResult result = new NexacroResult();
        result.addDataSet("dsUnitList", unitList);
        result.addVariable("responseInt", iVar1);
        result.addVariable("responseString", sVar1);
        
        
        return result;
    }
    
}
