package com.nexacro.spring.dao.ibatis;

import java.sql.SQLException;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.dao.DataAccessException;

import com.ibatis.sqlmap.client.SqlMapClient;
import com.nexacro.spring.dao.Dbms;
import com.nexacro.spring.dao.DbmsProvider;
import com.nexacro.spring.dao.ibatis.NexacroIbatisMetaDataProvider;
import com.nexacro.spring.dao.ibatis.SqlMapClientRowHandler;
import com.nexacro.spring.data.NexacroFirstRowHandler;

import egovframework.rte.psl.dataaccess.EgovAbstractDAO;
import egovframework.rte.psl.orm.ibatis.SqlMapClientTemplate;

public class NexacroIbatisAbstractDAO extends EgovAbstractDAO {

//	@Resource(name = "ibatisMetaDataProvider")
//	private NexacroIbatisMetaDataProvider ibatisMetaDataProvider;
	
	@Resource(name = "dbmsProvider")
	private DbmsProvider dbmsProvider;

	public int batch(String queryId, List batchArgs) throws SQLException {
		SqlMapClient sqlMapClient = getSqlMapClient();
		sqlMapClient.startBatch();
		for (Object args : batchArgs) {
			sqlMapClient.insert(queryId, args);
		}
		return sqlMapClient.executeBatch();
	}
	
	@Override
	public List<?> list(String queryId) {
		List<?> list = super.list(queryId);
		if (list == null || list.size() == 0) {
			list = getNexacroMetaData(queryId, null, list);
		}
		return list;
	}

	@Override
	public List<?> list(String queryId, Object parameterObject) {
		List<?> list = super.list(queryId, parameterObject);
		if (list == null || list.size() == 0) {
			list = getNexacroMetaData(queryId, parameterObject, list);
		}
		return list;
	}

	@Override
	public List<?> list(String queryId, int skipResults, int maxResults) {
		List<?> list = super.list(queryId, skipResults, maxResults);
		if (list == null || list.size() == 0) {
			list = getNexacroMetaData(queryId, null, list);
		}
		return list;
	}

	@Override
	public List<?> list(String queryId, Object parameterObject,
			int skipResults, int maxResults) {
		List<?> list = super.list(queryId, parameterObject, skipResults, maxResults);
		if (list == null || list.size() == 0) {
			list = getNexacroMetaData(queryId, parameterObject, list);
		}
		return list;
	}

	@Override
	public List<?> listWithPaging(String queryId, Object parameterObject,
			int pageIndex, int pageSize) {
		List<?> listWithPaging = super.listWithPaging(queryId, parameterObject, pageIndex, pageSize);
		if (listWithPaging == null || listWithPaging.size() == 0) {
			listWithPaging = getNexacroMetaData(queryId, parameterObject, listWithPaging);
		}
		return listWithPaging;
	}
	
	private List<?> getNexacroMetaData(String queryId, Object parameterObject, List originalResult) {
		// performance overhead..
//		return (List<?>) ibatisMetaDataProvider.doGetQueryMetaData(this, new Object[]{queryId, parameterObject});
		   return getSqlMapClientTemplateDelegator().queryForList(queryId, parameterObject);
    }
    
    public SqlMapClientTemplate getSqlMapClientTemplateDelegator() throws DataAccessException {
        SqlMapClientTemplate clientTemplate = super.getSqlMapClientTemplate();
        Dbms dbms = dbmsProvider.getDbms(clientTemplate.getDataSource());
        return new SqlMapClientTemplateDelegator(clientTemplate, dbms);
    }
    
    public void queryWithFirstRowHandler(String queryId, Object parameterObject, NexacroFirstRowHandler firstRowHandler, String sendName, int firstRowCount) {
    	SqlMapClientRowHandler rowHandler = new SqlMapClientRowHandler(firstRowHandler, sendName, firstRowCount);
        getSqlMapClientTemplate().queryWithRowHandler("largeDataDAO.selectLargeData", null, rowHandler);
        
        // send remain data..
        rowHandler.sendRemainData();
    }
}