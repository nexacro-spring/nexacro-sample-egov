package nexacro.sample.service.impl;

import javax.annotation.Resource;

import nexacro.sample.service.LargeDataService;
import nexacro.sample.service.dao.ibatis.LargeDataDAO;
import nexacro.sample.service.dao.jdbc.LargeDataJdbcDAO;

import org.springframework.stereotype.Service;

import com.nexacro.spring.data.NexacroFirstRowHandler;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 * Test를 위한 ServiceImpl Sample Class
 * </pre>
 *
 * @ClassName   : LargeServiceImpl.java
 * @Description : service impl.
 * @author Park SeongMin
 * @since 2015. 8. 17.
 * @version 1.0
 * @see
 * @Modification Information
 * <pre>
 *     since          author              description
 *  ===========    =============    ===========================
 *  2015. 8. 17.     Park SeongMin     최초 생성
 * </pre>
 */
@Service("largeDataService")
public class LargeServiceImpl extends EgovAbstractServiceImpl implements LargeDataService {

    @Resource(name = "largeDataDAO")
    private LargeDataDAO largeDataDAO;
    
    @Resource(name = "largeDataJdbcDAO")
    private LargeDataJdbcDAO largeDataJdbcDAO;
    
    private static boolean isInited = false;
    
    @Override
    public void selectLargeData(NexacroFirstRowHandler firstRowHandler, String sendDataSetName, int firstRowCount, int initDataCount) {
        
        if(!isInited) {
//            largeDataDAO.initData(initDataCount);
            largeDataJdbcDAO.initData(initDataCount);
        }
        isInited = true;
        largeDataDAO.selectLargeData(firstRowHandler, sendDataSetName, firstRowCount);
        
    }

    public void selectJdbcLargeData(NexacroFirstRowHandler firstRowHandler, String sendDataSetName, int firstRowCount, int initDataCount) {
        
        if(!isInited) {
            largeDataJdbcDAO.initData(initDataCount);
        }
        isInited = true;
        largeDataJdbcDAO.selectLargeData(firstRowHandler, sendDataSetName, firstRowCount);
        
    }

}
