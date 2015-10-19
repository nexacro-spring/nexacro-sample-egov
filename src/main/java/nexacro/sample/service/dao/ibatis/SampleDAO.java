package nexacro.sample.service.dao.ibatis;

import java.util.List;
import java.util.Map;

import nexacro.sample.vo.SampleVO;

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
@Repository("sampleDAO")
public class SampleDAO extends NexacroIbatisAbstractDAO {

    public List<SampleVO> selectSampleVoList(SampleVO searchVO) {
    	return (List<SampleVO>) list("sampleDAO.selectSampleVOList", searchVO);
    }
    
    public List<Map> selectSampleMapList(SampleVO searchVO) {
    	return (List<Map>) list("sampleDAO.selectSampleMapList", searchVO);
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
