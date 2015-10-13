package nexacro.sample.web;

import java.util.List;

import javax.annotation.Resource;

import com.nexacro.spring.annotation.ParamDataSet;
import com.nexacro.spring.data.NexacroResult;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import nexacro.sample.service.CodeService;
import nexacro.sample.vo.CodeVO;
import nexacro.sample.vo.GroupCodeVO;

/**
 * <pre>
 * Code 처리를 위한 Controller
 * </pre>
 *
 * @ClassName   : CodeController.java
 * @Description : Sample Controller Class
 * @author Park SeongMin
 * @since 2015. 9. 11.
 * @version 1.0
 * @see
 * @Modification Information
 * <pre>
 *     since          author              description
 *  ===========    =============    ===========================
 *  2015. 9. 11.     Park SeongMin     최초 생성
 * </pre>
 */
@Controller
public class CodeController  {

	private Logger log = LoggerFactory.getLogger(AdvancedFileController.class);
	
    @Resource(name = "codeService")
    private CodeService codeService;
    
    /**
     * 
     * Code를 조회 한다.
     *
     * @param searchVOList
     * @return
     */
    @RequestMapping(value = "/selectCodeGroupList.do")
    public NexacroResult selectCodeGroupList(@ParamDataSet(name="ds_search") List<GroupCodeVO> searchVOList){
        
        GroupCodeVO searchVo = null;
        if(searchVOList != null && searchVOList.size() > 0) {
            searchVo = searchVOList.get(0);
        }
        
        List<GroupCodeVO> groupCodeList = codeService.selectCodeGroupList(searchVo);
        
        List<CodeVO> codeList = codeService.selectCodeList();
        
        NexacroResult result = new NexacroResult();
        result.addDataSet("dsGroupCode", groupCodeList);
        result.addDataSet("dsCode", codeList);
        
        return result;
    }
    
    /**
     * 
     * Code를 수정한다.
     *
     * @param modifyGroupList
     * @param modifyCodeList
     * @return
     */
    @RequestMapping(value = "/modifyCodes.do")
    public NexacroResult modifyCodes(@ParamDataSet(name="dsGroupCode") List<GroupCodeVO> modifyGroupList
                            , @ParamDataSet(name="dsCode") List<CodeVO> modifyCodeList){
        
        codeService.modifyCodeGroup(modifyGroupList);
        codeService.modifyCode(modifyCodeList);
        
        NexacroResult result = new NexacroResult();
        
        return result;
    }
    
}
