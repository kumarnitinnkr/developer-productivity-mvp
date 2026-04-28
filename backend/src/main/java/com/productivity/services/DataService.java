package com.productivity.service;

import com.productivity.model.Developer;
import java.util.*;

public class DataService {
    public List<Developer> getDevelopers() {
        return Arrays.asList(
            new Developer("DEV001","Aarav"),
            new Developer("DEV002","Nitin"),
            new Developer("DEV003","Riya")
        );
    }
}