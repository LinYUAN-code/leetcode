package src.com.lin;

import java.util.Arrays;
import java.util.Collections;
import java.util.stream.Collectors;

public class L151 {
    public String reverseWords(String s) {
        String strs[] = Arrays.stream(s.split("(\\s)+")).filter(str -> !str.isEmpty()).collect(Collectors.collectingAndThen(Collectors.toList(), list -> {
            Collections.reverse(list);
            return list.toArray(new String[0]);
        }));
        return String.join(" ", strs);
    }
}
