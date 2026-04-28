package com.productivity.service;

import com.productivity.model.MetricsResponse;
import java.util.*;

public class InsightService {
    public Map<String,Object> getInsights(MetricsResponse m) {
        Map<String,Object> map = new HashMap<>();
        map.put("insights", Arrays.asList("Cycle time healthy","Bug rate low"));
        map.put("actions", Arrays.asList("Maintain PR review quality","Keep deployments frequent"));
        return map;
    }
}