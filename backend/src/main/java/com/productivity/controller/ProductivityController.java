package com.productivity.controller;

import com.productivity.model.*;
import com.productivity.service.*;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class ProductivityController {

    private final DataService dataService = new DataService();
    private final MetricsService metricsService = new MetricsService();
    private final InsightService insightService = new InsightService();

    @GetMapping("/developers")
    public List<Developer> developers() {
        return dataService.getDevelopers();
    }

    @GetMapping("/metrics/{id}")
    public MetricsResponse metrics(@PathVariable String id) {
        return metricsService.getMetrics(id);
    }

    @GetMapping("/insights/{id}")
    public Map<String,Object> insights(@PathVariable String id) {
        return insightService.getInsights(metricsService.getMetrics(id));
    }
}