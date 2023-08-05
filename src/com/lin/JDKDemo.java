package src.com.lin;

/*
 * 给OpenJDK源码调试使用
 */

public class JDKDemo {
    public static void main(String[] args) {
        synchronized(JDKDemo.class) {
            while(true) {
                System.out.println("Hello World");
            }
        }
    }
}
