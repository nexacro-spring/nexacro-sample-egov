package nexacro.sample.service.dao.ibatis;

import java.util.List;

import nexacro.sample.vo.UserVO;

import org.springframework.stereotype.Repository;

import com.nexacro.spring.dao.ibatis.NexacroIbatisAbstractDAO;

/**
 * <pre>
 * Test를 위한 DAO Sample Class
 * </pre>
 * 
 * @ClassName   : SampleDAO.java
 * @Description : Sample DAO Class
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
@Repository("userDAO")
public class UserDAO extends NexacroIbatisAbstractDAO {

    public List<UserVO> selectUserVoList(UserVO searchVO) {
        return (List<UserVO>) list("selectUserVOList", searchVO);
    }

    public void insertUserVO(UserVO user) {
        insert("insertUserVO", user);
    }
    
    public void updateUserVO(UserVO user) {
        insert("updateUserVO", user);
    }
    public void deleteUserVO(UserVO user) {
        insert("deleteUserVO", user);
    }

}
