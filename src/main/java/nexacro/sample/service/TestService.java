package nexacro.sample.service;

import java.util.List;
import java.util.Map;

import nexacro.sample.vo.PersonVO;
import nexacro.sample.vo.UnitVO;

/**
 * <pre>
 * Test를 위한 Servlce Sample Intreface
 * </pre>
 * 
 * @ClassName   : SampleService.java
 * @Description : Sample Intreface
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

public interface TestService {

    /**
     * Sample Service selectPerson Method
     * 
     * @return
     */
    PersonVO selectPerson(PersonVO personVO) throws Exception;
    
    List<UnitVO> selectUnit() throws Exception;
    
    List<Map> selectUnitMap(Map map) throws Exception;

    /**
     * Statements
     *
     * @return
     */
    List<Map> selectUnitResultClass();

    /**
     * Statements
     *
     * @return
     */
    List<Map> selectUnitMapAndResultMap();

}
