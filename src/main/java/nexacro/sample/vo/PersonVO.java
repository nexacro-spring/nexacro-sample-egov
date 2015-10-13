package nexacro.sample.vo;

/**
 * <pre>
 * PersonVO Class
 * </pre>
 * 
 * @ClassName   : PersonVO.java
 * @Description : Person VO Class.
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

public class PersonVO {
    /**
     * Person 이름
     * (String)name
     */
    private String name;

    /**
     * Person 나이
     * (int)age
     */
    private int age;

    /**
     * @return the name
     */
    public String getName() {
        return name;
    }

    /**
     * @param name
     *            the name to set
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * @return the age
     */
    public int getAge() {
        return age;
    }

    /**
     * @param age
     *            the age to set
     */
    public void setAge(int age) {
        this.age = age;
    }

}
