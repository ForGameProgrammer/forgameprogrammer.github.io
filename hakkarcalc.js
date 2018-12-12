function Calculate(health, armor, bloodInDeck, fatigue)
{
    var hp = health + armor;
    var hakkarAnimationDuration = 2;
    var fatigueAnimationDuration = 3.5;
    var turnCount = 0, bloodDamage = 0, fatigueDamage = 0, bloodCount = 0, totalAnimationTime = 0;
    var bloodATM = bloodInDeck;


    while (hp > 0)
    {
        turnCount++;
        for (var i = 0; i < bloodInDeck; i++)
        {
            bloodCount++;
            bloodDamage += 3;
            hp -= 3;
            bloodATM++;
            totalAnimationTime += hakkarAnimationDuration;
        }
        if (hp < 1) break;
        bloodInDeck = bloodATM;
        fatigue += 1;
        fatigueDamage += fatigue;
        totalAnimationTime += fatigueAnimationDuration;
        hp -= fatigue;
    }


    return {
        "bloodCount": bloodCount,
        "turnCount": turnCount,
        "fatigueDamage": fatigueDamage,
        "bloodDamage": bloodDamage,
        "totalAnimationTime": totalAnimationTime,
        "healthLeft" : hp 
    };
}