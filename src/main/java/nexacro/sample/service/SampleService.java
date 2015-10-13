package nexacro.sample.service;

import java.util.List;

import nexacro.sample.vo.SampleVO;

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

public interface SampleService {

    List<SampleVO> selectSampleVOList(SampleVO searchVO);

    void modifyMultiSampleVO(List<SampleVO> modifyList);

}
