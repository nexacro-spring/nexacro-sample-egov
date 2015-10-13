package nexacro.sample.service.dao.ibatis;

import java.util.List;

import nexacro.sample.vo.CodeVO;
import nexacro.sample.vo.GroupCodeVO;

import org.springframework.stereotype.Repository;

/**
 * <pre>
 * Test를 위한 DAO Sample Class
 * </pre>
 *
 * @ClassName   : CodeDAO.java
 * @Description : Sample DAO Class
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
@Repository("codeDAO")
public class CodeDAO extends NexacroIbatisAbstractDAO {

    public List<GroupCodeVO> selectCodeGroupList(GroupCodeVO searchVO) {
        return (List<GroupCodeVO>) list("codeDAO.selectCodeGroupList", searchVO);
    }

    public List<CodeVO> selectCodeList() {
        return (List<CodeVO>) list("codeDAO.selectCodeList", null);
    }

    public void insertGroupCodeVO(GroupCodeVO groupCodeVO) {
        insert("codeDAO.insertGroupCode", groupCodeVO);
    }

    public void updateGroupCodeVO(GroupCodeVO groupCodeVO) {
        update("codeDAO.updateGroupCode", groupCodeVO);
    }

    public void deleteGroupCodeVO(GroupCodeVO groupCodeVO) {
        delete("codeDAO.deleteGroupCode", groupCodeVO);
    }
    
    public void insertCodeVO(CodeVO codeVO) {
        insert("codeDAO.insertCode", codeVO);
    }

    public void updateCodeVO(CodeVO codeVO) {
        update("codeDAO.updateCode", codeVO);
    }

    public void deleteCodeVO(CodeVO codeVO) {
        delete("codeDAO.deleteCode", codeVO);
    }
    
}
