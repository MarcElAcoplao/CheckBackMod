let newSavefile = {"XP":0,"lostXP":0,"coins":0,"level":1,"highestLevel":1,"ranks":0,"XPBoost":1,"XPBoostEffect":1,"buttonCooldowns":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1794.0929999999987,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"unlocks":0,"timeUnlocks":0,"totalUnlocks":0,"possibleUnlocks":38,"currentTheme":2,"lastSave":1725129637825,"timeOfLastUpdate":1725129637760,"sessionStart":1725129631853,"pets":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"specialPets":[0,0,0,0,0,0,0,0,0,0,0,0],"enemies":[0,0,0,0,0,0,0,0,0,0],"selectedPet":0,"dailyRewards":0,"speed":1,"HP":0,"currentHP":0,"enemyHP":0,"DMG":0,"DEF":0,"items":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"itemXP":1,"itemStat":1,"itemXPBoost":1,"itemCooldown":1,"itemXPBoostEffectSoftcap":0,"itemUnlocks":0,"extraUnlocks":0,"itemXPBoostQoL":0,"itemLoot":1,"itemDailyXP":1,"extraPetAmount":0,"currentTab":1,"timePlayed":3.9050000000000016,"buttonClicks":0,"cratesOpened":0,"enemiesDefeated":0,"petsDiscovered":0,"tier":1,"highestTier":1,"timeShards":0,"tierXPmulti":1,"tierCooldown":1,"dimensionCooldown":1,"dimensionUnlocks":0,"dimensionAmount":[1,1,1,1,1,1,1,1,1],"dimensionMulti":[1,1,1,1,1,1,1,1,1],"clickToDimension":1,"enemiesToDimension":1,"bossHP":100000,"bossKills":0,"bossMulti":1};
//fix data
function fixFile(data) {
    let fixedObj = {};
    for (const entry in data) {
        if (entry in newSavefile) fixedObj[entry] = data[entry];
    }
    return fixedObj;
}
