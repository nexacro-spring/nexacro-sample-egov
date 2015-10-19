package nexacro.sample.service.impl;

import java.util.List;

import javax.annotation.Resource;

import nexacro.sample.service.UserService;
import nexacro.sample.service.dao.ibatis.UserDAO;
import nexacro.sample.vo.UserVO;

import org.springframework.stereotype.Service;

import com.nexacro.spring.data.DataSetRowTypeAccessor;
import com.nexacro.xapi.data.DataSet;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 * Test를 위한 ServiceImpl Sample Class
 * </pre>
 * 
 * @ClassName   : SampleServiceImpl.java
 * @Description : service impl
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
@Service("userService")
public class UserServiceImpl extends EgovAbstractServiceImpl implements UserService {

    /**
     * UserDAO class 선언 (UserDAO) Class Injection)
     * (UserDAO)sampleDAO
     */
    // @Autowired(required = false) // Type 정의
    @Resource(name = "userDAO")
    // Name 정의
    private UserDAO userDAO;

    @Override
    public List<UserVO> selectUserVOList(UserVO searchVO) {
        return userDAO.selectUserVoList(searchVO);
    }

    @Override
    public void modifyMultiUserVO(List<UserVO> modifyList) {

        int size = modifyList.size();
        for (int i=0; i<size; i++) {
            UserVO user = modifyList.get(i);
            if (user instanceof DataSetRowTypeAccessor){
                DataSetRowTypeAccessor accessor = (DataSetRowTypeAccessor) user;
                
                if (accessor.getRowType() == DataSet.ROW_TYPE_INSERTED){
                    userDAO.insertUserVO(user);
                }else if (accessor.getRowType() == DataSet.ROW_TYPE_UPDATED){
                    userDAO.updateUserVO(user);
                }else if (accessor.getRowType() == DataSet.ROW_TYPE_DELETED){
                    userDAO.deleteUserVO(user);
                }
            }
            
        }
    }
}
