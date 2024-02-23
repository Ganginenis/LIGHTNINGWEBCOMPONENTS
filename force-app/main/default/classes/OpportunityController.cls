public with sharing class OpportunityController {
    @AuraEnabled(cacheable=true)
    public static List<Opportunity> getOpportunities(){
       return [SELECT stageName from Opportunity];
    }
}