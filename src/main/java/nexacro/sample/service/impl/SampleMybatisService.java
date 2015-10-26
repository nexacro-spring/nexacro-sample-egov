package nexacro.sample.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import nexacro.sample.service.SampleService;
import nexacro.sample.service.dao.mybatis.SampleMapper;
import nexacro.sample.vo.SampleVO;

import org.springframework.stereotype.Service;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

@Service("sampleMybatisService")
public class SampleMybatisService extends EgovAbstractServiceImpl implements SampleService {

    @Resource(name = "sampleMapper")
    private SampleMapper sampleMapper;
	
	@Override
	public List<SampleVO> selectSampleVOList(SampleVO searchVO) {
		return sampleMapper.getSampleVOList(searchVO);
	}

	@Override
	public List<Map> selectSampleMapList(SampleVO searchVO) {
		return sampleMapper.getSampleMapList(searchVO);
	}

	@Override
	public void modifyMultiSampleVO(List<SampleVO> modifyList) {

	}

}