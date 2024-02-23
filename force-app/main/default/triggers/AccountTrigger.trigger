trigger AccountTrigger on Account (before insert) {
	AccountTriggerHandler.updateRecord(Trigger.new);
}