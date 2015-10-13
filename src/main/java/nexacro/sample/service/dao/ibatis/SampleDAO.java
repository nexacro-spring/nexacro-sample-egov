package nexacro.sample.service.dao.ibatis;

import java.util.List;

import nexacro.sample.vo.SampleVO;

import org.springframework.stereotype.Repository;

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
@Repository("sampleDAO")
public class SampleDAO extends NexacroIbatisAbstractDAO {

//	@Resource(name="sampleDAO")
//	private SampleDAO self;
	
    public List<SampleVO> selectSampleVoList(SampleVO searchVO) {
    	return (List<SampleVO>) list("sampleDAO.selectSampleVOList", searchVO);
//    	return (List<SampleVO>) self.list("sampleDAO.selectSampleVOList", searchVO);
    }

    public void insertSampleVO(SampleVO sample) {
        insert("sampleDAO.insertSampleVO", sample);
    }
    
    public void updateSampleVO(SampleVO sample) {
        update("sampleDAO.updateSampleVO", sample);
    }
    public void deleteSampleVO(SampleVO sample) {
        delete("sampleDAO.deleteSampleVO", sample);
    }

}
