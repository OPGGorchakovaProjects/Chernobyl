const images = [
    {
        source: require('./Images/1/1.jpg'),
        title: 'Агентурное сообщение. Комитет госбезопасности УССР',
        additionalImages: [
            require('./Images/1/1.jpg'),
        ]
    },
    {
        source: require('./Images/2/1.png'),
        title: 'О последствиях аварии на Чернобыльской АЭС',
        additionalImages: [
            require('./Images/2/1.png'),
            require('./Images/2/2.png'),
            require('./Images/2/3.png'),
        ]
    },
    {
        source: require('./Images/3/1.jpg'),
        title: 'Докладная записка подполковнику',
        additionalImages: [
            require('./Images/3/1.jpg'),
            require('./Images/3/2.jpg'),
        ]
    },
    {
        source: require('./Images/4/1.png'),
        title: 'О завершении расследования по уголовному делу об аварии на Чернобыльской АЭС',
        additionalImages: [
            require('./Images/4/1.png'),
        ]
    },
    {
        source: require('./Images/6/1.png'),
        title: 'О проблемах освоения земель, заряженных радионуклидами',
        additionalImages: [
            require('./Images/6/1.png'),
            require('./Images/6/2.png'),
            require('./Images/6/3.png'),
        ]
    },
    {
        source: require('./Images/7/1.png'),
        title: 'О ходе выполнения приказа МЗ СССР',
        additionalImages: [
            require('./Images/7/1.png'),
            require('./Images/7/2.png'),
            require('./Images/7/3.png'),
            require('./Images/7/4.png'),
            require('./Images/7/5.png'),
        ]
    },
    {
        source: require('./Images/8/1.png'),
        title: 'О ходе работ по обеспечению жильем и социальнобытовым обслуживанием эвакуированного населения области',
        additionalImages: [
            require('./Images/8/1.png'),
            require('./Images/8/2.png'),
            require('./Images/8/3.png'),
            require('./Images/8/4.png'),
            require('./Images/8/5.png'),
            require('./Images/8/6.png'),
            require('./Images/8/7.png'),
            require('./Images/8/8.png'),
            require('./Images/8/9.png'),
        ]
    },
    {
        source: require('./Images/9/1.png'),
        title: 'О ходе выполнения дезактивационных работ в Гомельской области',
        additionalImages: [
            require('./Images/9/1.png'),
            require('./Images/9/2.png'),
            require('./Images/9/3.png'),
            require('./Images/9/4.png'),
            require('./Images/9/5.png'),
            require('./Images/9/6.png'),
        ]
    },
    {
        source: require('./Images/10/1.png'),
        title: 'О возмещении материального ущерба населению',
        additionalImages: [
            require('./Images/10/1.png'),
            require('./Images/10/2.png'),
            require('./Images/10/3.png'),
            require('./Images/10/4.png'),
            require('./Images/10/5.png'),
            require('./Images/10/6.png'),
            require('./Images/10/7.png'),
            require('./Images/10/8.png'),
            require('./Images/10/9.png'),
        ]
    },
    {
        source: require('./Images/11/1.png'),
        title: 'О дополнительных мерах по трудоустройству, обеспечнию жильем и социально-бытовым оборудованием',
        additionalImages: [
            require('./Images/11/1.png'),
            require('./Images/11/2.png'),
            require('./Images/11/3.png'),
            require('./Images/11/4.png'),
            require('./Images/11/5.png'),
            require('./Images/11/6.png'),
            require('./Images/11/7.png'),
            require('./Images/11/8.png'),
            require('./Images/11/9.png'),
            require('./Images/11/10.png'),
            require('./Images/11/11.png'),
        ]
    },
    {
        source: require('./Images/12/1.png'),
        title: 'О проблемах, связанных с последствиями аварии на ЧАЭС',
        additionalImages: [
            require('./Images/12/1.png'),
            require('./Images/12/2.png'),
            require('./Images/12/3.png'),
            require('./Images/12/4.png'),
            require('./Images/12/5.png'),
            require('./Images/12/6.png'),
            require('./Images/12/7.png'),
        ]
    },
    {
        source: require('./Images/13/1.png'),
        title: 'Об улучшении материального положения населения',
        additionalImages: [
            require('./Images/13/1.png'),
            require('./Images/13/2.png'),
            require('./Images/13/3.png'),
            require('./Images/13/4.png'),
            require('./Images/13/5.png'),
            require('./Images/13/6.png'),
            require('./Images/13/7.png'),
            require('./Images/13/8.png'),
            require('./Images/13/9.png'),
            require('./Images/13/10.png'),
            require('./Images/13/11.png'),
            require('./Images/13/12.png'),
        ]
    },
    {
        source: require('./Images/14/1.png'),
        title: 'О ходе работ по ликвидации последствий аварии на Чернобыльской АЭС',
        additionalImages: [
            require('./Images/14/1.png'),
            require('./Images/14/2.png'),
            require('./Images/14/3.png'),
            require('./Images/14/4.png'),
            require('./Images/14/5.png'),
            require('./Images/14/6.png'),
            require('./Images/14/7.png'),
            require('./Images/14/8.png'),
            require('./Images/14/9.png'),
        ]
    },
    {
        source: require('./Images/15/1.png'),
        title: 'Справка начальника 4 отделения 6 отдела УКБД УРСР про усиление контролирующей работы на ЧАЭС',
        additionalImages: [
            require('./Images/15/1.png'),
            require('./Images/15/2.png'),
            require('./Images/15/3.png'),
            require('./Images/15/4.png'),
            require('./Images/15/5.png'),
        ]
    },
    {
        source: require('./Images/16/1.jpg'),
        title: 'Перечень сведений, подлежавших засекречиванию по вопроасам, связаанныи м аварией на блоке №4',
        additionalImages: [
            require('./Images/16/1.jpg'),
            require('./Images/16/2.jpg'),
            require('./Images/16/3.jpg'),
        ]
    },
    {
        source: require('./Images/17/1.png'),
        title: 'Перечень населенных пунктов, население котопых подлежит переселению в другие населенные пункты',
        additionalImages: [
            require('./Images/17/1.png'),
            require('./Images/17/2.png'),
        ]
    },
    {
        source: require('./Images/18/1.png'),
        title: 'Письмо председателя Гомельского облисполкома Войтенкова Н.Г.',
        additionalImages: [
            require('./Images/18/1.png'),
            require('./Images/18/2.png'),
        ]
    },
    {
        source: require('./Images/19/1.png'),
        title: 'О ходе ликвидации последствий аварии на Чернобыльской АЭС',
        additionalImages: [
            require('./Images/19/1.png'),
            require('./Images/19/2.png'),
            require('./Images/19/3.png'),
        ]
    },
    {
        source: require('./Images/20/1.png'),
        title: 'По поручению ЦК КПСС о ходе работ, связанных с ликвидацией последствий аварии',
        additionalImages: [
            require('./Images/20/1.png'),
            require('./Images/20/2.png'),
        ]
    },
    {
        source: require('./Images/21/1.png'),
        title: 'Распоряжение №301-рс о введении на территории области строгого дозиметрического контроля',
        additionalImages: [
            require('./Images/21/1.png'),
            require('./Images/21/2.png'),
            require('./Images/21/3.png'),
        ]
    },
    {
        source: require('./Images/22/1.png'),
        title: 'Распоряжение №417-рс об оплате труда работников',
        additionalImages: [
            require('./Images/22/1.png'),
            require('./Images/22/2.png'),
            require('./Images/22/3.png'),
            require('./Images/22/4.png'),
        ]
    },
    {
        source: require('./Images/23/1.png'),
        title: 'Распоряжение №520-рс о повышении тарифных ставок работникам',
        additionalImages: [
            require('./Images/23/1.png'),
            require('./Images/23/2.png'),
            require('./Images/23/3.png'),
            require('./Images/23/4.png'),
        ]
    },
    {
        source: require('./Images/24/1.png'),
        title: 'О результатах расследования причин аварии на Чернобыльской АЭС',
        additionalImages: [
            require('./Images/24/1.png'),
            require('./Images/24/2.png'),
            require('./Images/24/3.png'),
            require('./Images/24/4.png'),
            require('./Images/24/5.png'),
            require('./Images/24/6.png'),
            require('./Images/24/7.png'),
            require('./Images/24/8.png'),
            require('./Images/24/9.png'),
            require('./Images/24/10.png'),
            require('./Images/24/11.png'),
            require('./Images/24/12.png'),
            require('./Images/24/13.png'),
            require('./Images/24/14.png'),
            require('./Images/24/15.png'),
        ]
    },
    {
        source: require('./Images/25/1.png'),
        title: 'Об ускорении решения неотлодных вопросов, связанных с ликвидацией последствий',
        additionalImages: [
            require('./Images/23/1.png'),
            require('./Images/23/2.png'),
            require('./Images/23/3.png'),
        ]
    },
    {
        source: require('./Images/26/1.png'),
        title: 'Решение №133 О мерах по усилению лабораторного контроля за содержанием',
        additionalImages: [
            require('./Images/26/1.png'),
            require('./Images/26/2.png'),
            require('./Images/26/3.png'),
        ]
    },
    {
        source: require('./Images/27/1.png'),
        title: 'Решение №161-9 о мероприятиях по совместной деятельности областных и районных структур по контролю за обстановкой',
        additionalImages: [
            require('./Images/27/1.png'),
            require('./Images/27/2.png'),
            require('./Images/27/3.png'),
        ]
    },
    {
        source: require('./Images/28/1.png'),
        title: 'Решение №162 о сносе малых населенных пунктов в',
        additionalImages: [
            require('./Images/28/1.png'),
            require('./Images/28/2.png'),
        ]
    },
    {
        source: require('./Images/29/1.png'),
        title: 'Решение №165-13 о переселени населения и вывозе поголовья скота из зон повышенной радиации',
        additionalImages: [
            require('./Images/29/1.png'),
            require('./Images/29/2.png'),
        ]
    },
    {
        source: require('./Images/30/1.jpg'),
        title: 'Справка на 28 апреля 1986г',
        additionalImages: [
            require('./Images/30/1.jpg'),
            require('./Images/30/2.jpg'),
        ]
    },
    {
        source: require('./Images/31/1.png'),
        title: 'Об аварии на блоке №4 Чернобыльской АЭС',
        additionalImages: [
            require('./Images/31/1.png'),
        ]
    },
    {
        source: require('./Images/32/1.png'),
        title: 'Пропускные документы',
        additionalImages: [
            require('./Images/32/1.png'),
            require('./Images/32/2.png'),
            require('./Images/32/3.png'),
            require('./Images/32/4.png'),
            require('./Images/32/5.png'),
            require('./Images/32/6.png'),
            require('./Images/32/7.png'),
            require('./Images/32/8.png'),
            require('./Images/32/9.png'),
            require('./Images/32/10.png'),
            require('./Images/32/11.png'),]
    },
    {
        source: require('./Images/infoAboutMoving.png'),
        title: 'Информация о переселении аселения из зоны аварии на ЧАЭС',
        additionalImages: [
            require('./Images/infoAboutMoving.png'),
        ]
    },
    {
        source: require('./Images/InfAboutWomen.png'),
        title: 'Информация о трудоустройстве женщин',
        additionalImages: [
            require('./Images/InfAboutWomen.png'),
        ]
    },
    {
        source: require('./Images/Letter1.png'),
        title: 'Служебное письмо о выделении капитальных вложений для проведения I этапа работ по переселению населения',
        additionalImages: [
            require('./Images/Letter1.png'),
        ]
    },
    {
        source: require('./Images/LetterAboutCancel.png'),
        title: 'Письмо об оказании помощи при укомплектовании спциалистами учреждений культуры',
        additionalImages: [
            require('./Images/LetterAboutCancel.png'),
        ]
    },
    {
        source: require('./Images/LetterGrahov.png'),
        title: 'Письмо о выделении необходимых капитальных вложений для своевременного обеспечения населения',
        additionalImages: [
            require('./Images/LetterGrahov.png'),
        ]
    },
    {
        source: require('./Images/LetterMinist.png'),
        title: 'Письмо о размещение в г.Гомеле республиканского специализированного диспансера по выявлению',
        additionalImages: [
            require('./Images/LetterMinist.png'),
        ]
    },
    {
        source: require('./Images/Obj194.png'),
        title: 'Решение №194 о регистрации Устава Гомельского областного благотворительного фонда',
        additionalImages: [
            require('./Images/Obj194.png'),
        ]
    },
    {
        source: require('./Images/predsedGom.png'),
        title: 'Информация о составе переселяемых семей',
        additionalImages: [
            require('./Images/predsedGom.png'),
        ]
    },
    {
        source: require('./Images/Raspr515.png'),
        title: 'Распоряжение №515-рс об эвакуации жителей',
        additionalImages: [
            require('./Images/Raspr515.png'),
        ]
    },
    {
        source: require('./Images/Boom.png'),
        title: 'О взрыве на АЭС',
        additionalImages: [
            require('./Images/Boom.png'),
        ]
    },
    {
        source: require('./Images/Chaes.png'),
        title: 'Об аварии на ЧАЭС им В.И.Ленина',
        additionalImages: [
            require('./Images/Chaes.png'),
        ]
    },
    {
        source: require('./Images/document.png'),
        title: 'Справка по сообщение главврача',
        additionalImages: [
            require('./Images/document.png'),
        ]
    },
    {
        source: require('./Images/str2.jpg'),
        title: 'Причина и анализ аварии',
        additionalImages: [
            require('./Images/str2.jpg'),
            require('./Images/str3.jpg'),
        ]
    },
];

export default images;