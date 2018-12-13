function Calculate(health, armor, bloodInDeck, fatigue)
{
    var hp = health + armor;
    var hakkarAnimationDuration = 2.5;
    var fatigueAnimationDuration = 3;
    var turnCount = 0, bloodDamage = 0, fatigueDamage = 0, bloodCount = 0, totalAnimationTime = 0;
    var bloodATM = bloodInDeck;
    var calculationPerTurn = {}


    while (hp > 0)
    {
        turnCount++;
        calculationPerTurn[turnCount] = {
            bloodDamage : 0,
            fatigueDamage : 0,
            animationTime : 0,
            health : 0
        };
        var bloodDamageThisTurn = 0;
        var animationTimeThisTurn = 0;
        for (var i = 0; i < bloodInDeck; i++)
        {
            bloodCount++;
            bloodDamage += 3;
            bloodDamageThisTurn += 3;
            hp -= 3;
            bloodATM++;
            totalAnimationTime += hakkarAnimationDuration;
            animationTimeThisTurn += hakkarAnimationDuration;
        }
        calculationPerTurn[turnCount].bloodDamage = bloodDamageThisTurn;
        calculationPerTurn[turnCount].animationTime = animationTimeThisTurn;
        calculationPerTurn[turnCount].health = hp;
        bloodInDeck = bloodATM;
        if (hp < 1) break;
        fatigueDamage += fatigue;
        calculationPerTurn[turnCount].fatigueDamage = fatigue;
        fatigue += 1;
        totalAnimationTime += fatigueAnimationDuration;
        animationTimeThisTurn += fatigueAnimationDuration;
        hp -= fatigue;
        calculationPerTurn[turnCount].animationTime = animationTimeThisTurn;
        calculationPerTurn[turnCount].health = hp;
        
    }


    return {
        "bloodCount": bloodCount,
        "turnCount": turnCount,
        "fatigueDamage": fatigueDamage,
        "bloodDamage": bloodDamage,
        "totalAnimationTime": totalAnimationTime,
        "healthLeft": hp,
        "calculationPerTurn": calculationPerTurn
    };
}