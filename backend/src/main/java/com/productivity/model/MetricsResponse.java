package com.productivity.model;

public class MetricsResponse {
    public double leadTime;
    public double cycleTime;
    public double bugRate;
    public int deploymentFrequency;
    public int prThroughput;

    public MetricsResponse(double a,double b,double c,int d,int e){
        leadTime=a;
        cycleTime=b;
        bugRate=c;
        deploymentFrequency=d;
        prThroughput=e;
    }
}