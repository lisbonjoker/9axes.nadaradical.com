// Formato: cada pergunta pode ser string ou objeto { question: "...", weight: 1.5 }
questions = 
    [[//Descentralização-Centralização
        [//4
            { question: "Portugal deveria ser um Estado federal com regiões altamente autónomas.", weight: 2 },
            { question: "As regiões devem ter autonomia quase total para definir as suas políticas.", weight: 2 },
            { question: "O Governo central deveria ter muito menos poder do que as regiões.", weight: 2 }
        ],
        [//3
            { question: "Portugal deveria criar regiões administrativas com poderes fortes.", weight: 1.5 },
            { question: "As regiões devem controlar grande parte das suas políticas públicas.", weight: 1.5 },
            { question: "O poder político deveria ser transferido de Lisboa para as regiões.", weight: 1.5 }
        ],
        [//2
            { question: "As autarquias deveriam ter mais autonomia para tomar decisões locais.", weight: 1.2 },
            { question: "As regiões deveriam poder adaptar políticas nacionais à sua realidade.", weight: 1.2 },
            { question: "Mais competências deveriam ser transferidas para os governos locais.", weight: 1.2 }
            
        ],
        [//1
            { question: "Os governos locais normalmente compreendem melhor os problemas da sua região.", weight: 0.8 },
            { question: "A descentralização pode melhorar a eficácia das políticas públicas.", weight: 0.8 },
            { question: "As autarquias devem ter algum grau de autonomia para decidir prioridades locais.", weight: 0.8 }
        ],
        [//-1
            { question: "O Governo central deve manter controlo sobre decisões importantes.", weight: 0.8 },
            { question: "Algumas políticas devem ser iguais em todo o país.", weight: 0.8 },
            { question: "O Estado central garante igualdade entre regiões.", weight: 0.8 }
        ],
        [//-2
            { question: "O Governo central deveria ter mais poder sobre as autarquias.", weight: 1.2 },
            { question: "As regiões não devem poder contrariar leis nacionais.", weight: 1.2 },
            { question: "Demasiada autonomia regional pode criar desigualdades.", weight: 1.2 }
        ],
        [//-3
            { question: "Portugal precisa de um Governo central forte para funcionar bem.", weight: 1.5 },
            { question: "As políticas públicas devem ser definidas principalmente a nível nacional.", weight: 1.5 },
            { question: "Autonomias regionais fortes enfraquecem a unidade nacional.", weight: 1.5 }
        ],
        [//-4
            { question: "Portugal deve ser governado de forma altamente centralizada.", weight: 2 },
            { question: "As regiões não devem ter autonomia política significativa.", weight: 2 },
            { question: "Um Governo central forte deve controlar quase todas as decisões importantes.", weight: 2 }
        ]],[//Democratico-Autoritário
        [//4
            { question: "A democracia direta deveria ser usada com muito mais frequência em Portugal.", weight: 2 },
            { question: "Os cidadãos deveriam poder revogar mandatos de políticos através de votação.", weight: 2 },
            { question: "As decisões políticas importantes deveriam ser tomadas diretamente pelos cidadãos.", weight: 2 }
        ],
        [//3
            { question: "Referendos nacionais deveriam ser usados com mais frequência.", weight: 1.5 },
            { question: "O Governo deve seguir a vontade da maioria sempre que possível.", weight: 1.5 },
            { question: "A participação direta dos cidadãos deve ter mais peso nas decisões políticas.", weight: 1.5 }
        ],
        [//2
            { question: "As eleições livres são essenciais para a legitimidade de um governo.", weight: 1.2 },
            { question: "Todos os cidadãos devem ter o mesmo peso no processo democrático.", weight: 1.2 },
            { question: "O poder político deve vir do voto popular.", weight: 1.2 }
        ],
        [//1
            { question: "A democracia é a melhor forma de governo disponível.", weight: 0.8 },
            { question: "Os cidadãos devem poder escolher livremente os seus líderes.", weight: 0.8 },
            { question: "Governos devem prestar contas aos eleitores.", weight: 0.8 }
        ],
        [//-1
            { question: "Em certas situações, um líder forte pode ser mais eficaz do que processos democráticos.", weight: 0.8 },
            { question: "A opinião popular nem sempre leva às melhores decisões.", weight: 0.8 },
            { question: "O Governo deve tomar decisões difíceis mesmo contra a opinião pública.", weight: 0.8 }
        ],
        [//-2
             { question: "Um governo forte é mais importante do que um processo democrático lento.", weight: 1.2 },
             { question: "A estabilidade política pode justificar limitar certos processos democráticos.", weight: 1.2 },
             { question: "Líderes experientes devem ter mais poder de decisão do que a população em geral.", weight: 1.2 }
        ],
        [//-3
            { question: "As massas são frequentemente mal informadas para tomar boas decisões políticas.", weight: 1.5 },
            { question: "Demasiada democracia pode levar à instabilidade.", weight: 1.5 },
            { question: "Algumas decisões políticas deveriam ser tomadas por especialistas em vez do povo.", weight: 1.5 }
        ],
        [//-4
            { question: "As eleições não são necessárias para governar um país.", weight: 2 },
            { question: "Os cidadãos devem obedecer às decisões da liderança sem questionar.", weight: 2 },
            { question: "Um governo forte não deve depender da opinião pública.", weight: 2 }
        ]],[//Globalista-Isolacionista
        [//4
            { question: "O país deve ceder parte da sua soberania a instituições internacionais.", weight: 2 },
            { question: "Decisões internacionais devem ter prioridade sobre decisões nacionais em certas áreas.", weight: 2 },
            { question: "Organizações internacionais devem ter autoridade para impor regras aos países.", weight: 2 }
        ],
        [//3
            { question: "A União Europeia deveria ter mais poder político sobre os Estados-membros.", weight: 1.5 },
            { question: "Os países devem aceitar limitações à sua soberania para cooperação internacional.", weight: 1.5 },
            { question: "A integração política internacional deve ser aprofundada.", weight: 1.5 }
        ],
        [//2
            { question: "A globalização económica traz mais benefícios do que riscos.", weight: 1.2 },
            { question: "O país deve depender do comércio internacional para prosperar.", weight: 1.2 },
            { question: "A cooperação internacional deve ser priorizada sobre decisões unilaterais.", weight: 1.2 }
        ],
        [//1
            { question: "O comércio internacional deve ser incentivado.", weight: 0.8 },
            { question: "O país deve participar em organizações internacionais.", weight: 0.8 },
            { question: "A diplomacia deve ser preferida a ações unilaterais.", weight: 0.8 }
        ],
        [//-1
            { question: "A soberania nacional deve ter prioridade sobre decisões internacionais.", weight: 0.8 },
            { question: "O país deve proteger os seus interesses mesmo contra pressão internacional.", weight: 0.8 },
            { question: "Algumas decisões devem ser tomadas apenas a nível nacional.", weight: 0.8 }
        ],
        [//-2
            { question: "A União Europeia tem demasiado poder sobre os países membros.", weight: 1.2 },
            { question: "O país deveria reduzir a sua dependência de organizações internacionais.", weight: 1.2 },
            { question: "A globalização prejudica a independência nacional.", weight: 1.2 }
        ],
        [//-3
            { question: "O país deve evitar envolver-se em conflitos e acordos internacionais.", weight: 1.5 },
            { question: "Organizações internacionais interferem demasiado na política nacional.", weight: 1.5 },
            { question: "Cada país deve resolver os seus problemas sem influência externa.", weight: 1.5 }
        ],
        [//-4
            { question: "O país deve sair de organizações internacionais que limitem a sua soberania.", weight: 2 },
            { question: "A independência nacional é mais importante do que cooperação internacional.", weight: 2 },
            { question: "O país deve evitar compromissos internacionais mesmo com custos económicos.", weight: 2 }
        ]],[//Militarista-Pacifista
        [//4
            { question: "Portugal deve aumentar significativamente o orçamento das Forças Armadas.", weight: 2 },
            { question: "Uma nação deve estar sempre preparada para usar força militar para defender os seus interesses.", weight: 2 },
            { question: "As Forças Armadas devem ter um papel central na segurança nacional.", weight: 2 }
        ],
        [//3
            { question: "Portugal deve investir mais em capacidades militares modernas.", weight: 1.5 },
            { question: "A presença militar forte ajuda a garantir estabilidade internacional.", weight: 1.5 },
            { question: "As Forças Armadas devem participar ativamente em missões internacionais.", weight: 1.5 }
        ],
        [//2
            { question: "Portugal deve manter forças armadas fortes e bem equipadas.", weight: 1.2 },
            { question: "Uma opção militar deve estar sempre disponível para defender o país.", weight: 1.2 },
            { question: "As alianças militares são importantes para a segurança nacional.", weight: 1.2 }
        ],
        [//1
            { question: "Um país precisa de forças armadas para se proteger.", weight: 0.6 },
            { question: "Devemos respeitar aqueles que servem nas forças armadas.", weight: 0.6 },
            { question: "A defesa nacional é uma responsabilidade importante do Estado.", weight: 0.6 }
        ],
        [//-1
            { question: "A diplomacia deve ser preferida à ação militar sempre que possível.", weight: 0.8 },
            { question: "Evitar conflitos armados deve ser uma prioridade.", weight: 0.8 },
            { question: "A cooperação internacional pode prevenir guerras.", weight: 0.8 }
        ],
        [//-2
            { question: "O investimento militar deveria ser reduzido para financiar serviços públicos.", weight: 1.2 },
            { question: "A guerra normalmente traz mais problemas do que soluções.", weight: 1.2 },
            { question: "Os países devem evitar usar força militar no estrangeiro.", weight: 1.2 }
        ],
        [//-3
            { question: "As despesas militares são frequentemente um desperdício de recursos.", weight: 1.5 },
            { question: "As nações não devem intervir militarmente noutros países.", weight: 1.5 },
            { question: "A resolução pacífica de conflitos deve ser sempre priorizada.", weight: 1.5 }
        ],
        [//-4
            { question: "A guerra nunca é justificável.", weight: 2 },
            { question: "As forças armadas não deveriam ter um papel importante na política internacional.", weight: 2 },
            { question: "Os países deveriam abolir os seus exércitos permanentes.", weight: 2 }
        ]],[//Segurança-Liberdade
        [//4
            { question: "O Governo deve poder monitorizar comunicações mesmo sem mandado em situações de risco.", weight: 2 },
            { question: "Câmaras de vigilância devem ser amplamente usadas mesmo com impacto na privacidade.", weight: 2 },
            { question: "A segurança pública deve prevalecer mesmo que reduza liberdades individuais.", weight: 2 }
        ],
        [//3
            { question: "A polícia deve ter poderes alargados mesmo com menor controlo judicial.", weight: 1.5 },
            { question: "O Estado deve poder recolher dados digitais preventivamente.", weight: 1.5 },
            { question: "Medidas de vigilância são justificadas mesmo sem suspeita individual.", weight: 1.5 }
        ],
        [//2
            { question: "Algumas liberdades devem ser limitadas para reduzir riscos de crime.", weight: 1.2 },
            { question: "A polícia deve ter maior margem de atuação mesmo com menos garantias legais.", weight: 1.2 },
            { question: "A segurança coletiva pode justificar restrições a direitos individuais.", weight: 1.2 }
        ],
        [//1
            { question: "Alguma vigilância governamental é aceitável com supervisão.", weight: 1 },
            { question: "Ferramentas de vigilância devem ser usadas com limites legais claros.", weight: 1 },
            { question: "A liberdade deve ser equilibrada com necessidades de segurança.", weight: 1 }
        ],
        [//-1
            { question: "O Estado deve precisar de forte justificação legal para interferir na privacidade.", weight: 1 },
            { question: "A liberdade individual deve ser protegida mesmo com algum risco adicional.", weight: 1 },
            { question: "A privacidade deve ser um princípio fundamental nas políticas públicas.", weight: 1 }
        ],
        [//-2
            { question: "O reconhecimento facial pelo Estado deve ser proibido mesmo para segurança.", weight: 1.3 },
            { question: "A polícia deve ser fortemente limitada por mecanismos independentes.", weight: 1.3 },
            { question: "A vigilância estatal tende a abusos e deve ser restringida.", weight: 1.3 }
        ],
        [//-3
            { question: "O Governo não deve recolher dados pessoais em massa em nenhuma circunstância.", weight: 1.6 },
            { question: "A privacidade digital deve ser protegida mesmo que dificulte investigações.", weight: 1.6 },
            { question: "O poder policial deve ser significativamente reduzido.", weight: 1.6 }
        ],
        [//-4
            { question: "A vigilância estatal nunca deve ser permitida sob qualquer circunstância.", weight: 2 },
            { question: "O Estado é uma ameaça estrutural à liberdade individual.", weight: 2 },
            { question: "A liberdade individual deve prevalecer quase sem limitações.", weight: 2 }
        ]],[//Intervencionismo-Livre_Mercado
        [//4
            { question: "O Estado deve controlar os preços da habitação para garantir casas acessíveis.", weight: 2 },
            { question: "O Governo deve nacionalizar setores estratégicos como energia ou transportes.", weight: 2 },
            { question: "A riqueza deve ser redistribuída agressivamente para reduzir desigualdades.", weight: 2 }
        ],
        [//3
            { question: "Os impostos sobre os mais ricos devem aumentar significativamente.", weight: 1.6 },
            { question: "Serviços essenciais como saúde, energia e transportes devem ser públicos.", weight: 1.6 },
            { question: "O Estado deve intervir diretamente para reduzir desigualdades económicas.", weight: 1.6 }
        ],
        [//2
            { question: "O Governo deve regular o mercado da habitação.", weight: 1.3 },
            { question: "O Serviço Nacional de Saúde deve ser prioritariamente público.", weight: 1.3 },
            { question: "Grandes empresas devem pagar mais impostos do que atualmente.", weight: 1.3 }
        ],
        [//1
            { question: "O Estado deve regular empresas para proteger consumidores e trabalhadores.", weight: 0.8 },
            { question: "Alguma intervenção estatal na economia é necessária.", weight: 0.8 },
            { question: "O Governo deve garantir serviços públicos fortes.", weight: 0.8 }
        ],
        [//-1
            { question: "As empresas privadas normalmente gerem recursos melhor do que o Estado.", weight: 0.8 },
            { question: "Impostos elevados prejudicam o crescimento económico.", weight: 0.8 },
            { question: "A economia deve ter menos intervenção estatal.", weight: 0.8 }
        ],
        [//-2
            { question: "Empresas públicas devem ser privatizadas sempre que possível.", weight: 1.3 },
            { question: "Reduzir impostos ajuda a economia a crescer.", weight: 1.3 },
            { question: "O Estado interfere demasiado na economia.", weight: 1.3 }
        ],
        [//-3
            { question: "O mercado livre resolve problemas económicos melhor do que o Governo.", weight: 1.6 },
            { question: "O Estado não deve interferir no funcionamento das empresas.", weight: 1.6 },
            { question: "A competição de mercado deve ser quase totalmente livre.", weight: 1.6 }
        ],
        [//-4
            { question: "O Estado não deve intervir na economia.", weight: 2 },
            { question: "Impostos são essencialmente uma forma de coerção estatal.", weight: 2 },
            { question: "O mercado deve funcionar completamente sem regulação.", weight: 2 }
        ]],[//Secular-Religioso
        [//4
            { question: "O Estado deve ser completamente laico e não reconhecer qualquer religião.", weight: 2 },
            { question: "A religião não deve ter qualquer influência na política.", weight: 2 },
            { question: "As instituições públicas devem ser totalmente separadas de qualquer religião.", weight: 2 }
        ],
        [//3
            { question: "O Governo não deve financiar organizações religiosas.", weight: 1.5 },
            { question: "A religião deve ser mantida fora das decisões políticas.", weight: 1.5 },
            { question: "O Estado deve tratar todas as religiões de forma estritamente neutra.", weight: 1.5 }
        ],
        [//2
            { question: "As leis devem basear-se apenas em princípios seculares.", weight: 1.2 },
            { question: "A religião deve permanecer uma questão privada.", weight: 1.2 },
            { question: "O Estado deve manter uma separação clara entre Igreja e política.", weight: 1.2 }
        ],
        [//1
            { question: "A religião não deve influenciar diretamente as leis.", weight: 0.8 },
            { question: "O Estado deve ser neutro em relação às crenças religiosas.", weight: 0.8 },
            { question: "A separação entre Igreja e Estado é importante.", weight: 0.8 }
        ],
        [//-1
            { question: "A religião pode contribuir positivamente para a sociedade.", weight: 0.6 },
            { question: "As pessoas devem poder expressar publicamente a sua fé.", weight: 0.6 },
            { question: "Os valores religiosos podem inspirar decisões pessoais e sociais.", weight: 0.6 }
        ],
        [//-2
            { question: "A religião desempenha um papel importante na cultura de um país.", weight: 1 },
            { question: "As organizações religiosas ajudam frequentemente os mais necessitados.", weight: 1 },
            { question: "Os valores religiosos podem ser uma base moral importante para a sociedade.", weight: 1 }
        ],
        [//-3
            { question: "A religião deve ter maior influência na vida pública.", weight: 1.4 },
            { question: "As instituições religiosas devem ter um papel relevante na educação.", weight: 1.4 },
            { question: "Os valores religiosos devem orientar mais a sociedade.", weight: 1.4 }
        ],
        [//-4
            { question: "O Governo deve promover ativamente valores religiosos.", weight: 2 },
            { question: "A sociedade deve seguir princípios religiosos tradicionais.", weight: 2 },
            { question: "O Estado deve apoiar oficialmente uma religião dominante.", weight: 2 }
        ]],[//Progressista-Conservador
        [//4
            { question: "A sociedade deve abraçar mudanças sociais mesmo que desafiem tradições antigas.", weight: 1.8 },
            { question: "A ciência e a tecnologia devem guiar as decisões políticas.", weight: 1.8 },
            { question: "O progresso social exige questionar normas culturais antigas.", weight: 1.8 }
        ],
        [//3
            { question: "A igualdade de direitos para minorias deve ser uma prioridade política.", weight: 1.4 },
            { question: "A sociedade deve adaptar-se rapidamente às mudanças culturais.", weight: 1.4 },
            { question: "O progresso social normalmente melhora a qualidade de vida.", weight: 1.4 }
        ],
        [//2
            { question: "A sociedade deve evoluir com base em novos conhecimentos científicos.", weight: 1.2 },
            { question: "As mudanças sociais são uma parte natural do progresso.", weight: 1.2 },
            { question: "As instituições devem adaptar-se a novos valores sociais.", weight: 1.2 }
            
        ],
        [//1
            { question: "A sociedade deve equilibrar tradição e mudança.", weight: 0.8 },
            { question: "Algumas tradições devem ser repensadas ao longo do tempo.", weight: 0.8 },
            { question: "O progresso social pode trazer benefícios importantes.", weight: 0.8 }
        ],
        [//-1
            { question: "Tradições culturais devem ser preservadas.", weight: 0.8 },
            { question: "Mudanças sociais demasiado rápidas podem ser prejudiciais.", weight: 0.8 },
            { question: "Os valores familiares tradicionais são importantes para a sociedade.", weight: 0.8 }
        ],
        [//-2
            { question: "A sociedade moderna está a abandonar valores importantes.", weight: 1.2 },
            { question: "Devemos proteger tradições culturais mesmo quando são criticadas.", weight: 1.2 },
            { question: "As instituições tradicionais são fundamentais para estabilidade social.", weight: 1.2 }
        ],
        [//-3
            { question: "A sociedade era mais estável no passado.", weight: 1.5 },
            { question: "A tradição deve ser priorizada em relação a mudanças sociais.", weight: 1.5 },
            { question: "Os valores culturais tradicionais devem ser preservados.", weight: 1.5 }
        ],
        [//-4
            { question: "A sociedade moderna afastou-se demasiado das tradições.", weight: 2 },
            { question: "O progresso social frequentemente destrói valores importantes.", weight: 2 },
            { question: "Devemos regressar a valores sociais mais tradicionais.", weight: 2 }
        ]],[//Assimilacionista-Multiculturalista
        [//4
            { question: "Imigrantes devem adaptar-se completamente à cultura do país de acolhimento.", weight: 1.8 },
            { question: "A cultura nacional deve ser preservada acima de influências externas.", weight: 1.8 },
            { question: "A integração cultural deve ser uma prioridade para imigrantes.", weight: 1.8 }
        ],
        [//3
            { question: "Imigrantes devem aprender a língua e costumes locais rapidamente.", weight: 1.5 },
            { question: "É importante proteger a identidade cultural nacional.", weight: 1.5 },
            { question: "A imigração deve exigir adaptação cultural.", weight: 1.5 }
        ],
        [//2
            { question: "A integração cultural é importante para a coesão social.", weight: 1.2 },
            { question: "Imigrantes devem respeitar os valores do país de acolhimento.", weight: 1.2 },
            { question: "A cultura nacional deve ter prioridade no espaço público.", weight: 1.2 }
        ],
        [//1
            { question: "É razoável esperar que imigrantes aprendam a língua local.", weight: 0.9 },
            { question: "A proteção da cultura nacional é importante.", weight: 0.9 },
            { question: "A imigração deve ser acompanhada de políticas de integração.", weight: 0.9 }
        ],
        [//-1
            { question: "A diversidade cultural pode enriquecer a sociedade.", weight: 0.8 },
            { question: "A imigração pode trazer novas ideias e perspetivas.", weight: 0.8 },
            { question: "A convivência entre culturas diferentes é positiva.", weight: 0.8 }
        ],
        [//-2
            { question: "Uma sociedade multicultural pode ser mais dinâmica.", weight: 1.2 },
            { question: "A diversidade cultural deve ser valorizada.", weight: 1.2 },
            { question: "As culturas devem coexistir livremente dentro de um país.", weight: 1.2 }
        ],
        [//-3
            { question: "A mistura cultural melhora a sociedade.", weight: 1.5 },
            { question: "A diversidade cultural deve ser encorajada.", weight: 1.5 },
            { question: "As sociedades modernas são naturalmente multiculturais.", weight: 1.5 }
        ],	
        [//-4
            { question: "As fronteiras culturais não deveriam limitar a convivência humana.", weight: 2 },
            { question: "As culturas devem misturar-se livremente.", weight: 2 },
            { question: "A diversidade cultural global beneficia toda a humanidade.", weight: 2 }
        ]
    ]];
