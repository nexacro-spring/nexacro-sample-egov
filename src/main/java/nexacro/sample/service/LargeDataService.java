package nexacro.sample.service;

import com.nexacro.spring.data.NexacroFirstRowHandler;


/**
 * <pre>
 * Test를 위한 Servlce Sample Intreface
 * </pre>
 *
 * @ClassName   : LargeService.java
 * @Description : Sample Intreface
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

public interface LargeDataService {

    void selectLargeData(NexacroFirstRowHandler firstRowHandler, String sendDataSetName, int firstRowCount, int initDataCount);
    
    void selectJdbcLargeData(NexacroFirstRowHandler firstRowHandler, String sendDataSetName, int firstRowCount, int initDataCount);
    
}
