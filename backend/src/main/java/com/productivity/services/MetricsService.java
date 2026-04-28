package com.productivity.service;

import com.productivity.model.MetricsResponse;

public class MetricsService {

    public MetricsResponse getMetrics(String id) {

        if(id.equals("DEV001")) {
            return new MetricsResponse(3.2, 4.5, 0.08, 12, 18);
        }

        if(id.equals("DEV002")) {
            return new MetricsResponse(5.1, 6.2, 0.14, 8, 13);
        }

        if(id.equals("DEV003")) {
            return new MetricsResponse(2.4, 3.1, 0.03, 16, 24);
        }

        return new MetricsResponse(4.0, 5.0, 0.10, 10, 15);
    }
}