package nexacro.sample.service;

import java.util.List;

import nexacro.sample.vo.CodeVO;
import nexacro.sample.vo.GroupCodeVO;

/**
 * <pre>
 * Test를 위한 Servlce Sample Intreface
 * </pre>
 *
 * @ClassName   : CodeService.java
 * @Description : Sample Intreface
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

public interface CodeService {

    /**
     * Statements
     *
     * @param searchVo
     * @return
     */
    List<GroupCodeVO> selectCodeGroupList(GroupCodeVO searchVo);

    /**
     * Statements
     *
     * @return
     */
    List<CodeVO> selectCodeList();

    /**
     * Statements
     *
     * @param modifyVOList
     */
    void modifyCodeGroup(List<GroupCodeVO> modifyVOList);

    /**
     * Statements
     *
     * @param modifyVOList
     */
    void modifyCode(List<CodeVO> modifyVOList);

}
