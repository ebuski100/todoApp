import Goback from "./Goback";

function TaskTemplates() {
  return (
    <div className="taskTemplate-cont">
      <div className="templateHeader">
        <Goback />
        <div>Task Templates</div>
      </div>
      <div className="templateSect health">
        <div className="healthHeader templateSectHeader">Health</div>
        <div className="healthItem templateItem drinkwater">
          <div className="template1">
            <img
              src="/images/water-bottle.png"
              alt="water bottle"
              height={32}
            />
            <div>Drink water, Keep healthy</div>
          </div>
          <img src="images/forward arrow.png" alt="" height={16} />
        </div>
        <div className="healthItem templateItem sleepEarly">
          <div className="template1">
            <img src="/images/moon.png" alt="" height={32} />
            <div>Go to bed early</div>
          </div>
          <img src="images/forward arrow.png" alt="" height={16} />
        </div>
        <div className="healthItem templateItem drinkwater">
          <div className="template1">
            <img src="/images/fruit.png" height={32} alt="" />
            <div>Eat fruits</div>
          </div>
          <img src="images/forward arrow.png" height={16} alt="" />
        </div>
        <div className="healthItem templateItem drinkwater">
          <div className="template1">
            <img src="/images/coffee-cup.png" alt="" height={32} />
            <div>Take a break</div>
          </div>
          <img src="images/forward arrow.png" height={16} alt="" />
        </div>
        <div className="healthItem templateItem drinkwater">
          <div className="template1">
            <img src="/images/medication reminder.png" alt="" height={32} />
            <div>Medication reminder</div>
          </div>
          <img src="images/forward arrow.png" height={16} alt="" />
        </div>
      </div>

      <div className="templateSect Life">
        <div className="lifeHeader templateSectHeader">Life</div>
        <div className="LifeItem templateItem reading">
          <div className="template1">
            <img src="/images/journal.png" alt="reading books" height={32} />
            <div>Keep reading</div>
          </div>
          <img src="images/forward arrow.png" alt="" height={16} />
        </div>
        <div className="lifeItem templateItem shopping">
          <div className="template1">
            <img src="/images/trolley.png" alt="" height={32} />
            <div>Go shopping</div>
          </div>
          <img src="images/forward arrow.png" alt="" height={16} />
        </div>
        <div className="lifeItem templateItem study">
          <div className="template1">
            <img src="/images/study.png" height={32} alt="" />
            <div>Study</div>
          </div>
          <img src="images/forward arrow.png" height={16} alt="" />
        </div>
        <div className="lifeItem templateItem Language">
          <div className="template1">
            <img src="/images/foreign-language.png" alt="" height={32} />
            <div>Learn a Foreign Language</div>
          </div>
          <img src="images/forward arrow.png" height={16} alt="" />
        </div>
        <div className="lifeItem templateItem musicalInstrument">
          <div className="template1">
            <img src="/images/guitar.png" alt="" height={32} />
            <div>Learn Instruments</div>
          </div>
          <img src="images/forward arrow.png" height={16} alt="" />
        </div>
        <div className="lifeItem templateItem saveMoney">
          <div className="template1">
            <img src="/images/piggy-bank.png" alt="" height={32} />
            <div>Save Money</div>
          </div>
          <img src="images/forward arrow.png" height={16} alt="" />
        </div>
      </div>
      <div className="templateSect sports">
        <div className="sportsHeader templateSectHeader">Sports</div>
        <div className="sportsItem templateItem exercise">
          <div className="template1">
            <img src="/images/jogging.png" alt="water bottle" height={32} />
            <div>Go exercising</div>
          </div>
          <img src="images/forward arrow.png" alt="" height={16} />
        </div>
        <div className="sportsItem templateItem cycling">
          <div className="template1">
            <img src="/images/bicycle.png" alt="" height={32} />
            <div>Go Cycling</div>
          </div>
          <img src="images/forward arrow.png" alt="" height={16} />
        </div>
        <div className="sportsItem templateItem workout">
          <div className="template1">
            <img src="/images/workout.png" height={32} alt="" />
            <div>Work out</div>
          </div>
          <img src="images/forward arrow.png" height={16} alt="" />
        </div>
        <div className="sportsItem templateItem stretch">
          <div className="template1">
            <img src="/images/stretch.png" alt="" height={32} />
            <div>stretch</div>
          </div>
          <img src="images/forward arrow.png" height={16} alt="" />
        </div>
        <div className="sportsItem templateItem yoga">
          <div className="template1">
            <img src="/images/yoga.png" alt="" height={32} />
            <div>Practice Yoga</div>
          </div>
          <img src="images/forward arrow.png" height={16} alt="" />
        </div>
      </div>
      <div className="templateSect spiritual">
        <div className="spiritualHeader templateSectHeader">Spiritual</div>
        <div className="spiritualItem templateItem pray">
          <div className="template1">
            <img src="/images/praying.png" alt="prayer" height={32} />
            <div>Pray</div>
          </div>
          <img src="images/forward arrow.png" alt="" height={16} />
        </div>
        <div className="spiritualItem templateItem scripture">
          <div className="template1">
            <img src="/images/bible.png" alt="" height={32} />
            <div>Study the scripture</div>
          </div>
          <img src="images/forward arrow.png" alt="" height={16} />
        </div>
        <div className="spiritualItem templateItem Meditation">
          <div className="template1">
            <img src="/images/meditationTask.png" height={32} alt="" />
            <div>Meditation</div>
          </div>
          <img src="images/forward arrow.png" height={16} alt="" />
        </div>
        <div className="spiritualItem templateItem fasting">
          <div className="template1">
            <img src="/images/no-food.png" alt="" height={32} />
            <div>Fasting</div>
          </div>
          <img src="images/forward arrow.png" height={16} alt="" />
        </div>
      </div>
    </div>
  );
}

export default TaskTemplates;
