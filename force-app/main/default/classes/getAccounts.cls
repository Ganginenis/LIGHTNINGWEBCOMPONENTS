public with sharing class getAccounts {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountsList(){
        return [SELECT Id, Name, Type, Industry from Account LIMIT 5];
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountsByType(string type)
    {
        return [SELECT Id, Name, Type from Account Where Type=:type LIMIT 5];
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountsBySearch(string searchkey){
        string key = '%'+searchkey+'%';
        return [SELECT Id, Name, Type, Industry from Account WHERE Name LIKE :key LIMIT 5];
    }
}