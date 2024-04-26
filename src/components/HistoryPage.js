import styles from '../subComponents/historyStyle.module.css';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import styled, { keyframes } from 'styled-components';
import { lazy } from 'react';
const PowerButton = lazy(() => import('../subComponents/PowerButton'));

const WorkIcon = () => <></>;

const Title = styled.div`
  font-family: 'Karla', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
  color: white;
`;

export default function BlogPage() {
  return (
    <div className={styles.App}>
      <PowerButton />
      <h1 className={styles.title}>История Чернобыльской АЭС</h1>
      <div className="empty"></div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="1970"
          dateClassName={styles.text}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Строительство </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Чернобыльской атомной электростанции (ЧАЭС)
          </h4>
          <p>
            началось в 1970 г. Она расположена в 18 км от города Чернобыль и в
            150 км от Киева. В 4 км от АЭС был возведен город атомщиков Припять
            — по имени реки, которая соединяет белорусское и украинское Полесье
            и несет свои воды в Днепр. Общая численность населения в
            30-километровой зоне вокруг АЭС составляла свыше 100 тысяч человек.
            Обслуживающий персонал АЭС насчитывал около 6,5 тысячи человек.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="26 апреля 1986"
          dateClassName={styles.text}

          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Катастрофа</h3>
          <h4 className="vertical-timeline-element-subtitle">
            на Чернобыльской АЭС, Чернобыльская катастрофа —
          </h4>
          <p>
            разрушение 26 апреля 1986 года четвёртого энергоблока Чернобыльской
            атомной электростанции, расположенной на территории Украинской ССР
            (ныне — Украина).
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Разрушение</h3>

          <p>
            носило взрывной характер, реактор был полностью разрушен, и в
            окружающую среду было выброшено большое количество радиоактивных
            веществ. Авария расценивается как крупнейшая в своём роде за всю
            историю атомной энергетики, как по предполагаемому количеству
            погибших и пострадавших от её последствий людей, так и по
            экономическому ущербу. В течение первых трёх месяцев после аварии
            погиб 31 человек; отдалённые последствия облучения, выявленные за
            последующие 15 лет, стали причиной гибели от 60 до 80 человек. 134
            человека перенесли лучевую болезнь той или иной степени тяжести,
            более 115 тыс. человек из 30-километровой зоны были эвакуированы.
            Для ликвидации последствий были мобилизованы значительные ресурсы,
            более 600 тыс. человек участвовали в ликвидации последствий аварии.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          s
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Облако,</h3>
          <p>
            образовавшееся от горящего реактора, разнесло различные
            радиоактивные материалы, и прежде всего радионуклиды йода и цезия,
            по большей части территории Европы. Наибольшие выпадения отмечались
            на значительных территориях в Советском Союзе, расположенных вблизи
            реактора и относящихся теперь к территориям Украины, Беларуси и
            Российской Федерации.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>

      <Title>Как это было?</Title>

      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="25 апреля 1986"
          dateClassName={styles.text}

          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <p>
            На 25 апреля 1986 года была запланирована остановка 4-го энергоблока
            Чернобыльской АЭС для очередного планово-предупредительного ремонта.
            Во время таких остановок обычно проводятся различные испытания
            оборудования, как регламентные, так и нестандартные, проводящиеся по
            отдельным программам.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <p>
            Испытания должны были проводиться на мощности 700—1000 МВт
            (тепловых), 22—31 % от полной мощности реактора. Примерно за сутки
            до аварии (к 3:47 25 апреля) мощность реактора была снижена примерно
            до 50 % (1600 МВт). В соответствии с программой, отключена система
            аварийного охлаждения реактора.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <p>
            Далее мощность реактора была снижена до уровня, предусмотренного
            программой (около 700 МВт тепловых), а затем, по неустановленной
            причине, до 500 МВт. В 0:28 при переходе с системы локального
            автоматического регулирования (ЛАР) на автоматический регулятор
            общей мощности (АР) оператор не смог удержать мощность реактора на
            заданном уровне, и мощность провалилась (тепловая до 30 МВт и
            нейтронная до нуля). Персонал принял решение о восстановлении
            мощности реактора и через несколько минут добился её роста и в
            дальнейшем — стабилизации на уровне 160—200 МВт (тепловых).
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="1:23 ночи"
          dateClassName={styles.text}

          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <p>
            В 1:23:04 начался эксперимент. В 1:23:39 зарегистрирован сигнал
            аварийной защиты от нажатия кнопки на пульте оператора. В следующие
            несколько секунд зарегистрированы различные сигналы,
            свидетельствующие о быстром росте мощности, затем регистрирующие
            системы вышли из строя.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="01:23, 26 апреля 1986"
          dateClassName={styles.text}

          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <p>
            В 01:23 26 апреля 1986 года на 4-м энергоблоке Чернобыльской АЭС
            произошёл взрыв, который полностью разрушил реактор. Здание
            энергоблока частично обрушилось, при этом погибли два человека. В
            различных помещениях и на крыше начался пожар. Впоследствии остатки
            активной зоны расплавились, смесь из расплавленного металла, песка,
            бетона и фрагментов топлива растеклась по подреакторным помещениям.
            В результате аварии произошёл выброс в окружающую среду
            радиоактивных веществ.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>

      <Title>Причины аварии</Title>

      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <p>
            Существуют по крайней мере два различных подхода к объяснению причин
            чернобыльской аварии, которые можно назвать официальными, а также
            несколько альтернативных версий разной степени достоверности.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <p>
            Государственная комиссия, сформированная в СССР для расследования
            причин катастрофы, возложила основную ответственность за неё на
            оперативный персонал и руководство ЧАЭС. Международное агентство по
            атомной энергии создало свою консультативную группу, известную как
            Консультативный комитет по вопросам ядерной безопасности (INSAG;
            International Nuclear Safety Advisory Group), который на основании
            материалов, предоставленных советской стороной, и устных
            высказываний специалистов в своём отчёте 1986 года также в целом
            поддержал эту точку зрения. Утверждалось, что авария явилась
            следствием маловероятного совпадения ряда нарушений правил и
            регламентов эксплуатационным персоналом, а катастрофические
            последствия приобрела из-за того, что реактор был приведён в не
            регламентное состояние.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <p>
            Грубые нарушения правил эксплуатации АЭС, совершённые её персоналом,
            согласно этой точке зрения, заключаются в следующем:
            <br />
            -проведение эксперимента «любой ценой», несмотря на изменение
            состояния реактора;
            <br />
            -вывод из работы исправных технологических защит, которые просто
            остановили бы реактор ещё до того, как он попал в опасный режим;
            <br />
            -замалчивание масштаба аварии в первые дни руководством ЧАЭС.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="1991"
          dateClassName={styles.text}

          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <p>
            Однако в 1991 году комиссия Госатомнадзора СССР заново рассмотрела
            этот вопрос и пришла к заключению, что «начавшаяся из-за действий
            оперативного персонала Чернобыльская авария приобрела неадекватные
            им катастрофические масштабы вследствие неудовлетворительной
            конструкции реактора». Кроме того, комиссия проанализировала
            действовавшие на момент аварии нормативные документы и не
            подтвердила некоторые из ранее выдвигавшихся в адрес персонала
            станции обвинений.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="1993"
          dateClassName={styles.text}

          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <p>
            В 1993 году INSAG опубликовал дополнительный отчёт, обновивший ту
            часть доклада, в которой основное внимание уделено причинам аварии.
            Согласно отчёту, основными факторами, внёсшими вклад в возникновение
            аварии, считаются:
            <br />
            - реактор не соответствовал нормам безопасности и имел опасные
            конструктивные особенности;
            <br />
            - низкое качество регламента эксплуатации в части обеспечения
            безопасности;
            <br />
            - неэффективность режима регулирования и надзора за безопасностью в
            ядерной энергетике, общая недостаточность культуры безопасности в
            ядерных вопросах как на национальном, так и на местном уровне;
            <br />
            - отсутствовал эффективный обмен информацией по безопасности как
            между операторами, так и между операторами и проектировщиками,
            персонал не обладал достаточным пониманием особенностей станции,
            влияющих на безопасность;
            <br />- персонал допустил ряд ошибок и нарушил существующие
            инструкции и программу испытаний.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <p>
            Так же существуют предположения, что взрыв является причиной
            спланированной диверсионной акции, скрытой правительством.
            Сторонники этой версии говорят о том, что взорвавшийся энергоблок
            был сфотографирован военным спутником, принадлежащим Соединенным
            Штатам, подозрительно находившемся над ЧАЭС точно во время аварии.
            «Теорию заговора» очень сложно подтвердить или опровергнуть, как и
            любые факты, которые в неё не укладываются. Вследствие катастрофы
            был выведен из строя секретный объект Чернобыль-2 или Загоризонтная
            РЛС Дуга-1 (объект был выведен из строя из-за приближенности к АЭС и
            высокого уровня радиации после аварии).
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <p>
            Рассматривалась также версия, которая называет причинами аварии
            землетрясение, произошедшее в окрестностях станции. В качестве
            доказательств ссылаются на сейсмический толчок, который был записан
            сейсмографами незадолго до аварии. Сторонники этой версии заявляют,
            что толчок произошел до аварии, а значительная вибрация, которая
            зафиксирована непосредственно перед аварией могла быть вызвана не
            процессами внутри атомного реактора, а землетрясением. Однако
            остается странным тот факт, что соседний, третий энергоблок, на
            котором никаких испытаний не проводилось не пострадал и никаких
            сейсмических толчков его операторами до момента взрыва зафиксировано
            не было.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <p>
            Самая фантастическая версия допускает возникновение шаровой молнии,
            которая образовалась в результате электротехнических экспериментов.
            Она могла проникнуть в активную зону реактора и нарушила режим его
            работы.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      <Title>Причины аварии</Title>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="27-28 апреля 1986"
          dateClassName={styles.text}

          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <p>
            Первое сообщение об аварии на Чернобыльской АЭС появилось в
            советских СМИ 27 апреля, через 36 часов после взрыва на четвёртом
            реакторе. Диктор припятской радиотрансляционной сети сообщил о сборе
            и временной эвакуации жителей города. 28 апреля 1986 года в 21:00
            ТАСС передаёт краткое информационное сообщение: «На Чернобыльской
            атомной электростанции произошёл несчастный случай. Один из
            реакторов получил повреждение. Принимаются меры с целью устранения
            последствий инцидента. Пострадавшим оказана необходимая помощь.
            Создана правительственная комиссия для расследования происшедшего».
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <p>
            После оценки масштабов радиоактивного загрязнения стало понятно, что
            потребуется эвакуация города Припять, которая была проведена 27
            апреля. В первые дни после аварии было эвакуировано население
            10-километровой зоны. В последующие дни было эвакуировано население
            других населённых пунктов 30-километровой зоны. Запрещалось брать с
            собой вещи, многие были эвакуированы в домашней одежде. Чтобы не
            раздувать панику, сообщалось, что эвакуированные вернутся домой
            через три дня. Домашних животных с собой брать не разрешали.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <p>
            Безопасные пути движения колонн эвакуированного населения
            определялись с учётом уже полученных данных радиационной разведки.
            Несмотря на это, ни 26, ни 27 апреля жителей не предупредили о
            существующей опасности и не дали никаких рекомендаций о том, как
            следует себя вести, чтобы уменьшить влияние радиоактивного
            загрязнения.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Час после взрыва"
          dateClassName={styles.text}

          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <p>
            Уже спустя час после взрыва радиационная обстановка в Припяти была
            очевидна. Почему же не было предпринять никаких мер? Люди не
            представляли, что делать. Согласно инструкциям и приказам,
            существующим уже 25 лет, решение об эвакуации населения из
            пораженной зоны обязаны были принимать местные власти. Ко времени
            прибытия Правительственной комиссии уже можно было эвакуировать всех
            жителей Припяти, причем даже пешком. Но никто не решился взять на
            себя такую ответственность.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Утро 26 апреля 1986"
          dateClassName={styles.text}

          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <p>
            С утра, 26 апреля, все дороги Чернобыля были залиты водой и
            непонятным белым раствором, всё было белым, все обочины. В город
            было стянуто множество милиционеров. Но они ничего не делали —
            просто расположились у объектов: почты, дворца культуры. Везде
            гуляли люди, маленькие дети, стояла сильная жара, люди ехали на
            пляж, на дачи, на рыбалку, отдыхали на речке у охлаждающего пруда —
            искусственного водохранилища близ АЭС.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <p>
            В то время, как многие иностранные средства массовой информации
            говорили об угрозе для жизни людей, а на экранах телевизоров
            демонстрировалась карта воздушных потоков в Центральной и Восточной
            Европе, в Киеве и других городах Украины и Белоруссии проводились
            праздничные демонстрации и гуляния, посвящённые Первомаю. Лица,
            ответственные за утаивание информации, объясняли впоследствии своё
            решение необходимостью предотвратить панику среди населения.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <p>
            Впоследствии 4-й реакторный блок был накрыт саркофагом, сооруженным
            из стали и бетона. Чернобыльская авария не на шутку встревожила весь
            мир. Теперь было сложно кого-то убедить в том, что подобная
            катастрофа — трагическая случайность, цепочка совпадений. Уже после
            распада Советского Союза Запад постоянно требовал, чтобы Украина
            закрыла ЧАЭС. Это и было сделано, но только в 2000 году взамен на
            кредиты для постройки других реакторов.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}