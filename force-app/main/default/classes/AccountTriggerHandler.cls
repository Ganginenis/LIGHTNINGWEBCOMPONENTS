public with sharing class AccountTriggerHandler {
    public static void updateRecord(List<Account> accList) {
        for(Account acc : accList){
            if(acc.Industry == 'Media' || acc.Industry == 'Energy'){
                acc.Rating = 'Hot';
            }
        }
    }
}