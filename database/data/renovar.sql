begin;

\set ON_ERROR_STOP on

insert into firms values (default, 'Renovar', 'Renovar Engenharia Ltda.', '07474287000130')
returning firm_id as renovar_firm_id \gset

select api.create_depot(
  'CT 20210030',
  1,
  'Manutenção Civil',
  'Prestação de serviços contínuos e sob de manda referentes à manutenção preventiva, corretiva e preditiva dos sistemas construtivos e prediais do Complexo Arquitetônico do Senado Federal e das Residências Oficiais, relativos à manutenção de revestimento, vedação, forro, pintura, pavimentação viária, vidraçaria, impermeabilização, estruturas, fundações sede infraestruturas civis, com o fornecimento de materiais, mão de obra, ferramentas e serviços sob de manda necessários à execução do objeto, durante 30 (trinta) meses consecutivos.',
  null,
  :renovar_firm_id::integer,
  20,
  20,
  '2021-04-28',
  '2021-04-29',
  '2021-04-28',
  '2023-10-27',
  null,
  '00200004234202021'
) as renovar_depot_id \gset

-- supplies
insert into supplies values (default, '2.1.1', :renovar_depot_id::integer, 'Plataforma de trabalho aéreo tesoura', 24, 2, true);
insert into supplies values (default, '2.1.2', :renovar_depot_id::integer, 'Plataforma de trabalho aéreo articulada', 24, 2, true);
insert into supplies values (default, '2.1.3', :renovar_depot_id::integer, 'Locação de andaime suspenso tipo leve', 17, 2, true);
insert into supplies values (default, '2.1.4', :renovar_depot_id::integer, 'Montagem e desmontagem de andaime suspenso tipo leve (balancim)', 7, 2, true);
insert into supplies values (default, '2.1.5', :renovar_depot_id::integer, 'Deslocamento de andaime suspenso tipo leve (balancim)', 7, 2, true);
insert into supplies values (default, '2.1.6', :renovar_depot_id::integer, 'Andaime fachadeiro', 20, 2, true);
insert into supplies values (default, '2.1.7', :renovar_depot_id::integer, 'Montagem e desmontagem de andaime fachadeiro', 3, 2, true);
insert into supplies values (default, '2.1.8', :renovar_depot_id::integer, 'Andaime tubular (aluguel/mês)', 19, 2, true);
insert into supplies values (default, '2.1.9', :renovar_depot_id::integer, 'Montagem e desmontagem de andaime tubular', 2, 2, true);
insert into supplies values (default, '2.1.10', :renovar_depot_id::integer, 'Sistema Guarda-corpo-Rodapé (GcR) metálico', 19, 2, true);
insert into supplies values (default, '2.1.11', :renovar_depot_id::integer, 'Locação de Retroescavadeira com Pá Carregadeira sobre Rodas', 24, 2, true);
insert into supplies values (default, '2.1.12', :renovar_depot_id::integer, 'Locação de Caminhão Munck', 24, 2, true);
insert into supplies values (default, '2.1.13', :renovar_depot_id::integer, 'Projeto de Impermeabilização', 3, 2, true);
insert into supplies values (default, '2.1.14', :renovar_depot_id::integer, 'Locação de caçambas', 7, 2, true);
insert into supplies values (default, '2.1.15', :renovar_depot_id::integer, 'Sondagem', 7, 2, true);
insert into supplies values (default, '2.1.16', :renovar_depot_id::integer, 'Sondagem - Perfuração adicional de furo', 2, 2, true);
insert into supplies values (default, '2.1.17', :renovar_depot_id::integer, 'Projetos de segurança do trabalho', 7, 2, true);
insert into supplies values (default, '2.2.1', :renovar_depot_id::integer, 'Chapisco com argamassa traço 1:3', 3, 2, true);
insert into supplies values (default, '2.2.2', :renovar_depot_id::integer, 'Reboco com argamassa industrializada e=2,0 cm', 3, 2, true);
insert into supplies values (default, '2.2.3', :renovar_depot_id::integer, 'Contrapiso em argamassa (e=2cm) ou Regularização de contrapiso existente', 3, 2, true);
insert into supplies values (default, '2.2.4', :renovar_depot_id::integer, 'Laminado decorativo de alta pressão (LDAP)', 3, 2, true);
insert into supplies values (default, '2.2.5', :renovar_depot_id::integer, 'Cerâmica para revestimento de superfícies internas ou externas – Linha Administrativa', 3, 2, true);
insert into supplies values (default, '2.2.6', :renovar_depot_id::integer, 'Granito cinza andorinha para piso', 3, 2, true);
insert into supplies values (default, '2.2.7', :renovar_depot_id::integer, 'Granito Cinza Andorinha para rodapé', 3, 2, true);
insert into supplies values (default, '2.2.8', :renovar_depot_id::integer, 'Granito Cinza Andorinha para soleira e peitoril', 3, 2, true);
insert into supplies values (default, '2.2.9', :renovar_depot_id::integer, 'Granito Preto São Gabriel para piso', 3, 2, true);
insert into supplies values (default, '2.2.10', :renovar_depot_id::integer, 'Granito Preto São Gabriel para rodapé', 3, 2, true);
insert into supplies values (default, '2.2.11', :renovar_depot_id::integer, 'Granito Preto São Gabriel para soleira e peitoril', 3, 2, true);
insert into supplies values (default, '2.2.12', :renovar_depot_id::integer, 'Granito Preto Absoluto para revestimento de superfícies internas e externas - Linha Administrativa', 3, 2, true);
insert into supplies values (default, '2.2.13', :renovar_depot_id::integer, 'Mármore Bege Bahia para piso e parede', 3, 2, true);
insert into supplies values (default, '2.2.14', :renovar_depot_id::integer, 'Granito Arabesco para revestimento de superfícies internas e externas - Linha Administrativa', 3, 2, true);
insert into supplies values (default, '2.2.15', :renovar_depot_id::integer, 'Porcelanato para revestimento de superfícies internas e externas - Linha Residencial', 3, 2, true);
insert into supplies values (default, '2.2.16', :renovar_depot_id::integer, 'Mármore Branco Especial para piso e parede', 3, 2, true);
insert into supplies values (default, '2.2.17', :renovar_depot_id::integer, 'Granitina para revestimento de pisos', 3, 2, true);
insert into supplies values (default, '2.2.18', :renovar_depot_id::integer, 'Instalação de revestimento de piso têxtil (carpete) reaproveitado', 3, 2, true);
insert into supplies values (default, '2.2.19', :renovar_depot_id::integer, 'Piso vinílico semiflexível', 3, 2, true);
insert into supplies values (default, '2.2.20', :renovar_depot_id::integer, 'Piso vinílico flexível em manta', 3, 2, true);
insert into supplies values (default, '2.2.21', :renovar_depot_id::integer, 'Tratamento de trincas superficiais', 2, 2, true);
insert into supplies values (default, '2.2.22', :renovar_depot_id::integer, 'Junta de movimentação em fachada', 2, 2, true);
insert into supplies values (default, '2.2.23', :renovar_depot_id::integer, 'Tratamento de juntas de dilatação ou movimentação', 2, 2, true);
insert into supplies values (default, '2.2.24', :renovar_depot_id::integer, 'Recuperação superficial de preparação para pintura epóxi de alto desempenho', 3, 2, true);
insert into supplies values (default, '2.2.25', :renovar_depot_id::integer, 'Lixamento, calafetação e aplicação de sinteco em piso de madeira - Linha Residencial', 3, 2, true);
insert into supplies values (default, '2.2.26', :renovar_depot_id::integer, 'Rodapé de madeira', 2, 2, true);
insert into supplies values (default, '2.2.27', :renovar_depot_id::integer, 'Piso em taco de madeira - Linha Residencial', 3, 2, true);
insert into supplies values (default, '2.2.28', :renovar_depot_id::integer, 'Piso de borracha antiderrapante tipo moeda', 3, 2, true);
insert into supplies values (default, '2.2.29', :renovar_depot_id::integer, 'Piso sintético flutuante - Linha Residencial', 3, 2, true);
insert into supplies values (default, '2.2.30', :renovar_depot_id::integer, 'Revestimento acústico perfilado - Linha Administrativa', 3, 2, true);
insert into supplies values (default, '2.2.31', :renovar_depot_id::integer, 'Revestimento acústico plano - Linha Administrativa', 3, 2, true);
insert into supplies values (default, '2.3.1', :renovar_depot_id::integer, 'Parede em gesso acartonado (drywall)', 3, 2, true);
insert into supplies values (default, '2.3.2', :renovar_depot_id::integer, 'Reparos superficiais em painéis de gesso acartonado', 3, 2, true);
insert into supplies values (default, '2.4.1', :renovar_depot_id::integer, 'Forro em gesso acartonado monolítico', 3, 2, true);
insert into supplies values (default, '2.4.2', :renovar_depot_id::integer, 'Forro em gesso acartonado monolítico, sem estrutura', 3, 2, true);
insert into supplies values (default, '2.4.3', :renovar_depot_id::integer, 'Tabica metálica em forro de gesso acartonado', 2, 2, true);
insert into supplies values (default, '2.4.4', :renovar_depot_id::integer, 'Alçapão em forro de gesso acartonado', 3, 2, true);
insert into supplies values (default, '2.4.5', :renovar_depot_id::integer, 'Forro monolítico de gesso em placas', 3, 2, true);
insert into supplies values (default, '2.4.6', :renovar_depot_id::integer, 'Forro de PVC em réguas de 100 x 6000mm', 3, 2, true);
insert into supplies values (default, '2.4.7', :renovar_depot_id::integer, 'Forro de PVC em réguas de 100 x 6000mm, sem estrutura', 3, 2, true);
insert into supplies values (default, '2.4.8', :renovar_depot_id::integer, 'Forro de PVC modular em placas', 3, 2, true);
insert into supplies values (default, '2.4.9', :renovar_depot_id::integer, 'Forro em chapas metálicas', 3, 2, true);
insert into supplies values (default, '2.4.10', :renovar_depot_id::integer, 'Forro mineral modulado', 3, 2, true);
insert into supplies values (default, '2.4.11', :renovar_depot_id::integer, 'Forro mineral modulado, sem estrutura', 3, 2, true);
insert into supplies values (default, '2.5.1', :renovar_depot_id::integer, 'Remoção de pintura ou textura', 3, 2, true);
insert into supplies values (default, '2.5.2', :renovar_depot_id::integer, 'Aplicação de fundo selador base água', 3, 2, true);
insert into supplies values (default, '2.5.3', :renovar_depot_id::integer, 'Textura acrílica - Linha Administrativa', 3, 2, true);
insert into supplies values (default, '2.5.4', :renovar_depot_id::integer, 'Massa corrida', 3, 2, true);
insert into supplies values (default, '2.5.5', :renovar_depot_id::integer, 'Massa acrílica', 3, 2, true);
insert into supplies values (default, '2.5.6', :renovar_depot_id::integer, 'Pintura com tinta látex acrílica Premium (paredes)', 3, 2, true);
insert into supplies values (default, '2.5.7', :renovar_depot_id::integer, 'Pintura com tinta látex acrílica Premium - cores especiais (sistema tintométrico)', 3, 2, true);
insert into supplies values (default, '2.5.8', :renovar_depot_id::integer, 'Pintura tinta látex acrílica standard (tetos)', 3, 2, true);
insert into supplies values (default, '2.5.9', :renovar_depot_id::integer, 'Fundo anticorrosivo e de aderência (base água)', 3, 2, true);
insert into supplies values (default, '2.5.10', :renovar_depot_id::integer, 'Pintura esmalte acetinado (metais e madeiras)', 3, 2, true);
insert into supplies values (default, '2.5.11', :renovar_depot_id::integer, 'Pintura em verniz sintético', 3, 2, true);
insert into supplies values (default, '2.5.12', :renovar_depot_id::integer, 'Pintura Eletrostática', 3, 2, true);
insert into supplies values (default, '2.5.13', :renovar_depot_id::integer, 'Pintura com tinta acrílica (pisos)', 3, 2, true);
insert into supplies values (default, '2.5.14', :renovar_depot_id::integer, 'Pintura com tinta epóxi de alto desempenho (pisos)', 3, 2, true);
insert into supplies values (default, '2.5.15', :renovar_depot_id::integer, 'Verniz de poliuretano sobre pintura epóxi de alto desempenho', 3, 2, true);
insert into supplies values (default, '2.5.16', :renovar_depot_id::integer, 'Tratamento antiderrapante em verniz de poliuretano sobre pintura epóxi', 3, 2, true);
insert into supplies values (default, '2.5.17', :renovar_depot_id::integer, 'Gesso cola', 3, 2, true);
insert into supplies values (default, '2.5.18', :renovar_depot_id::integer, 'Pintura para superfícies galvanizadas', 3, 2, true);
insert into supplies values (default, '2.6.1', :renovar_depot_id::integer, 'Base para pavimentação com concreto magro', 4, 2, true);
insert into supplies values (default, '2.6.2', :renovar_depot_id::integer, 'Pavimentação em concreto armado simples', 3, 2, true);
insert into supplies values (default, '2.6.3', :renovar_depot_id::integer, 'Selagem ou resselagem de juntas em pavimentação de concreto armado', 2, 2, true);
insert into supplies values (default, '2.6.4', :renovar_depot_id::integer, 'Pavimentação em elementos intertravados de concreto', 3, 2, true);
insert into supplies values (default, '2.6.5', :renovar_depot_id::integer, 'Pavimentação com Asfalto Pré-Misturado a Frio (PMF)', 4, 2, true);
insert into supplies values (default, '2.6.6', :renovar_depot_id::integer, 'Pavimentação asfáltica com CBUQ para aplicação a frio (remendo)', 4, 2, true);
insert into supplies values (default, '2.6.7', :renovar_depot_id::integer, 'Pintura para sinalização e demarcação viária horizontal', 3, 2, true);
insert into supplies values (default, '2.6.8', :renovar_depot_id::integer, 'Meios-fios em concreto pré-moldado', 2, 2, true);
insert into supplies values (default, '2.6.9', :renovar_depot_id::integer, 'Pintura de meios-fios com tinta acrílica', 2, 2, true);
insert into supplies values (default, '2.7.1', :renovar_depot_id::integer, 'Telha metálica trapezoidal galvanizada - GR-40', 3, 2, true);
insert into supplies values (default, '2.7.2', :renovar_depot_id::integer, 'Cumeeira para telha metálica trapezoidal galvanizada - GR-40', 2, 2, true);
insert into supplies values (default, '2.7.3', :renovar_depot_id::integer, 'Telha metálica trapezoidal galvanizada - GR-25', 3, 2, true);
insert into supplies values (default, '2.7.4', :renovar_depot_id::integer, 'Cumeeira para telha metálica trapezoidal galvanizada - GR-25', 2, 2, true);
insert into supplies values (default, '2.7.5', :renovar_depot_id::integer, 'Telha de fibrocimento modulada - espessura 8mm', 3, 2, true);
insert into supplies values (default, '2.7.6', :renovar_depot_id::integer, 'Cumeeira articulada ABA SUPERIOR de fibrocimento para telha modulada - espessura 6 mm', 2, 2, true);
insert into supplies values (default, '2.7.7', :renovar_depot_id::integer, 'Cumeeira articulada ABA INFERIOR de fibrocimento para telha modulada - espessura 6 mm', 2, 2, true);
insert into supplies values (default, '2.7.8', :renovar_depot_id::integer, 'Telha de fibrocimento ondulada - espessura 6mm', 3, 2, true);
insert into supplies values (default, '2.7.9', :renovar_depot_id::integer, 'Cumeeira UNIVERSAL para telha de fibrocimento ondulada - espessura 6 mm', 2, 2, true);
insert into supplies values (default, '2.7.10', :renovar_depot_id::integer, 'Cumeeira TIPO SHED para telha de fibrocimento ondulada - espessura 6 mm', 2, 2, true);
insert into supplies values (default, '2.7.11', :renovar_depot_id::integer, 'Telha de fibrocimento - Canalete 49 Eternit', 3, 2, true);
insert into supplies values (default, '2.8.1', :renovar_depot_id::integer, 'Passarela móvel para telhado (sem degraus)', 7, 2, true);
insert into supplies values (default, '2.8.2', :renovar_depot_id::integer, 'Passarela móvel para telhado (com degraus)', 7, 2, true);
insert into supplies values (default, '2.8.3', :renovar_depot_id::integer, 'Ponto de ancoragem', 7, 2, true);
insert into supplies values (default, '2.8.4', :renovar_depot_id::integer, 'Esticador de cabo de aço', 7, 2, true);
insert into supplies values (default, '2.8.5', :renovar_depot_id::integer, 'Indicador de tensão', 7, 2, true);
insert into supplies values (default, '2.8.6', :renovar_depot_id::integer, 'Absorvedor de energia para linha de vida', 7, 2, true);
insert into supplies values (default, '2.8.7', :renovar_depot_id::integer, 'Suporte intermediário para linha de vida', 7, 2, true);
insert into supplies values (default, '2.8.8', :renovar_depot_id::integer, 'Suporte intermediário curvo para linha de vida', 7, 2, true);
insert into supplies values (default, '2.8.9', :renovar_depot_id::integer, 'Pilar de ancoragem para linha de vida', 7, 2, true);
insert into supplies values (default, '2.8.10', :renovar_depot_id::integer, 'Placa de ancoragem para montagem no pilar', 7, 2, true);
insert into supplies values (default, '2.8.11', :renovar_depot_id::integer, 'Placa de ancoragem para extremidade', 7, 2, true);
insert into supplies values (default, '2.8.12', :renovar_depot_id::integer, 'Trole para linha de vida horizontal', 7, 2, true);
insert into supplies values (default, '2.8.13', :renovar_depot_id::integer, 'Trole para travaqueda retrátil', 7, 2, true);
insert into supplies values (default, '2.8.14', :renovar_depot_id::integer, 'Cabo de aço com 8 mm de diâmetro galvanizado para linha de vida', 2, 2, true);
insert into supplies values (default, '2.8.15', :renovar_depot_id::integer, 'Kit para montagem de dois olhais', 7, 2, true);
insert into supplies values (default, '2.8.16', :renovar_depot_id::integer, 'Manilha com travamento por porca e cupilha', 7, 2, true);
insert into supplies values (default, '2.8.17', :renovar_depot_id::integer, 'Kit de linha de vida para escada de marinheiro', 7, 2, true);
insert into supplies values (default, '2.8.18', :renovar_depot_id::integer, 'Corda de poliamida 12 mm tipo bombeiro, para trabalho em altura', 2, 2, true);
insert into supplies values (default, '2.8.19', :renovar_depot_id::integer, 'Locação de guincho elétrico de coluna', 22, 2, true);
insert into supplies values (default, '2.8.20', :renovar_depot_id::integer, 'Ensaio de ponto de ancoragem existente', 7, 2, true);
insert into supplies values (default, '2.8.21', :renovar_depot_id::integer, 'Isolamento de obra com tela plástica com malha de 5mm e estrutura de madeira pontaleteada', 3, 2, true);
insert into supplies values (default, '2.8.22', :renovar_depot_id::integer, 'Tapume', 3, 2, true);
insert into supplies values (default, '2.8.23', :renovar_depot_id::integer, 'Escada tipo marinheiro COM proteção', 2, 2, true);
insert into supplies values (default, '2.8.24', :renovar_depot_id::integer, 'Escada tipo marinheiro SEM proteção', 2, 2, true);
insert into supplies values (default, '2.9.1', :renovar_depot_id::integer, 'Limpeza e Preparação do Substrato para Impermeabilização', 3, 2, true);
insert into supplies values (default, '2.9.2', :renovar_depot_id::integer, 'Substituição de Coletores de Águas Pluviais', 7, 2, true);
insert into supplies values (default, '2.9.3', :renovar_depot_id::integer, 'Tratamento de Tubulação Passante para Impermeabilização', 7, 2, true);
insert into supplies values (default, '2.9.4', :renovar_depot_id::integer, 'Regularização de substrato para Impermeabilização - 3cm', 3, 2, true);
insert into supplies values (default, '2.9.5', :renovar_depot_id::integer, 'Regularização de substrato para Impermeabilização - 6cm', 3, 2, true);
insert into supplies values (default, '2.10.1', :renovar_depot_id::integer, 'Camada Separadora para Impermeabilização', 3, 2, true);
insert into supplies values (default, '2.10.2', :renovar_depot_id::integer, 'Camada de Proteção Térmica para Impermeabilização', 3, 2, true);
insert into supplies values (default, '2.10.3', :renovar_depot_id::integer, 'Camada de Amortecimento para Impermeabilização', 3, 2, true);
insert into supplies values (default, '2.10.4', :renovar_depot_id::integer, 'Camada de proteção mecânica simples de impermeabilização', 3, 2, true);
insert into supplies values (default, '2.10.5', :renovar_depot_id::integer, 'Camada de Proteção Mecânica em Placas de Impermeabilização', 3, 2, true);
insert into supplies values (default, '2.10.6', :renovar_depot_id::integer, 'Pintura Inibidora de Raízes em Estrutura Impermeabilizada', 3, 2, true);
insert into supplies values (default, '2.10.7', :renovar_depot_id::integer, 'Camada Drenante para Impermeabilização', 3, 2, true);
insert into supplies values (default, '2.10.8', :renovar_depot_id::integer, 'Calha em Chapa de Aço Galvanizado nº 24', 3, 2, true);
insert into supplies values (default, '2.10.9', :renovar_depot_id::integer, 'Rufo em Chapa de Aço Galvanizado nº 24', 3, 2, true);
insert into supplies values (default, '2.10.10', :renovar_depot_id::integer, 'Resina de Poliuretano para Estrutura de Concreto', 5, 2, true);
insert into supplies values (default, '2.10.11', :renovar_depot_id::integer, 'Chapim Pré-Moldado de Concreto Aparente', 2, 2, true);
insert into supplies values (default, '2.10.12', :renovar_depot_id::integer, 'Armação em tela de aço soldado nervurada', 3, 2, true);
insert into supplies values (default, '2.10.13', :renovar_depot_id::integer, 'Trama de aço composta por terças para telhados de até 2 águas', 3, 2, true);
insert into supplies values (default, '2.10.14', :renovar_depot_id::integer, 'Revestimento impermeabilizante bloqueador de umidade', 3, 2, true);
insert into supplies values (default, '2.10.15', :renovar_depot_id::integer, 'Pintura com tinta refletiva aluminizada para impermeabilização', 3, 2, true);
insert into supplies values (default, '2.10.16', :renovar_depot_id::integer, 'Concreto leve com poliestireno expandido', 4, 2, true);
insert into supplies values (default, '2.10.17', :renovar_depot_id::integer, 'Colagem da camada de proteção térmica de impermeabilização', 3, 2, true);
insert into supplies values (default, '2.11.1', :renovar_depot_id::integer, 'Impermeabilização de superfície com revestimento bicomponente semi flexível', 3, 2, true);
insert into supplies values (default, '2.12.1', :renovar_depot_id::integer, 'Impermeabilização com emulsão asfáltica', 3, 2, true);
insert into supplies values (default, '2.12.2', :renovar_depot_id::integer, 'Impermeabilização com Membrana de Poliuretano', 3, 2, true);
insert into supplies values (default, '2.12.3', :renovar_depot_id::integer, 'Impermeabilização com Manta Asfáltica', 3, 2, true);
insert into supplies values (default, '2.12.4', :renovar_depot_id::integer, 'Impermeabilização com manta asfáltica aluminizada', 3, 2, true);
insert into supplies values (default, '2.12.5', :renovar_depot_id::integer, 'Impermeabilização com manta elastomérica de etileno-propileno-dieno-monômero (EPDM)', 3, 2, true);
insert into supplies values (default, '2.12.6', :renovar_depot_id::integer, 'Impermeabilização com membrana acrílica', 3, 2, true);
insert into supplies values (default, '2.12.7', :renovar_depot_id::integer, 'Asfalto elastomérico para colagem de manta asfáltica', 3, 2, true);
insert into supplies values (default, '2.12.8', :renovar_depot_id::integer, 'Impermeabilização com manta dupla (com maçarico)', 3, 2, true);
insert into supplies values (default, '2.12.9', :renovar_depot_id::integer, 'Impermeabilização com manta dupla (com asfalto elastomérico)', 3, 2, true);
insert into supplies values (default, '2.13.1', :renovar_depot_id::integer, 'Vidro temperado incolor com 10 mm de espessura', 3, 2, true);
insert into supplies values (default, '2.13.2', :renovar_depot_id::integer, 'Vidro temperado incolor com 8mm de espessura', 3, 2, true);
insert into supplies values (default, '2.13.3', :renovar_depot_id::integer, 'Vidro laminado incolor de 8mm de espessura', 3, 2, true);
insert into supplies values (default, '2.13.4', :renovar_depot_id::integer, 'Bucha para pivô de dobradiça para vidro temperado', 7, 2, true);
insert into supplies values (default, '2.13.5', :renovar_depot_id::integer, 'Suporte para bandeira de vidro temperado, com ponto de giro para dobradiça', 7, 2, true);
insert into supplies values (default, '2.13.6', :renovar_depot_id::integer, 'Suporte de canto, simples, para vidro temperado', 7, 2, true);
insert into supplies values (default, '2.13.7', :renovar_depot_id::integer, 'Suporte de união, sem batedor, para dois ou três vidros temperados', 7, 2, true);
insert into supplies values (default, '2.13.8', :renovar_depot_id::integer, 'Botão de correção para vidro temperado', 7, 2, true);
insert into supplies values (default, '2.13.9', :renovar_depot_id::integer, 'Fechadura bico-de-papagaio, com furo, para vidro temperado', 7, 2, true);
insert into supplies values (default, '2.13.10', :renovar_depot_id::integer, 'Fechadura bico-de-papagaio, com furo, para janela de vidro temperado', 7, 2, true);
insert into supplies values (default, '2.13.11', :renovar_depot_id::integer, 'Fechadura para porta de abrir de vidro temperado', 7, 2, true);
insert into supplies values (default, '2.13.12', :renovar_depot_id::integer, 'Contra fechadura, para alvenaria, para porta com fechadura 1520/9520', 7, 2, true);
insert into supplies values (default, '2.13.13', :renovar_depot_id::integer, 'Contra fechadura de pressão para porta de vidro temperado', 7, 2, true);
insert into supplies values (default, '2.13.14', :renovar_depot_id::integer, 'Contra fechadura, com furo, para porta com furo', 7, 2, true);
insert into supplies values (default, '2.13.15', :renovar_depot_id::integer, 'Trinco inferior, com miolo, para porta de vidro temperado', 7, 2, true);
insert into supplies values (default, '2.13.16', :renovar_depot_id::integer, 'Mola hidráulica BTS 75R', 7, 2, true);
insert into supplies values (default, '2.13.17', :renovar_depot_id::integer, 'Puxador redondo, padrão em poliéster, para porta de vidro temperado', 7, 2, true);
insert into supplies values (default, '2.13.18', :renovar_depot_id::integer, 'Puxador H tubular em aço inox, comprimento 45cm, para portas de vidro temperado', 7, 2, true);
insert into supplies values (default, '2.13.19', :renovar_depot_id::integer, 'Puxador em aço inox sob medida – Tipo A', 7, 2, true);
insert into supplies values (default, '2.13.20', :renovar_depot_id::integer, 'Puxador em aço inox sob medida – Tipo B', 7, 2, true);
insert into supplies values (default, '2.13.21', :renovar_depot_id::integer, 'Dobradiça superior para porta de vidro temperado', 7, 2, true);
insert into supplies values (default, '2.13.22', :renovar_depot_id::integer, 'Perfil em alumínio, tipo U - abas iguais - PU 5/8" x 5/8" – espessura 1,58mm', 2, 2, true);
insert into supplies values (default, '2.13.23', :renovar_depot_id::integer, 'Trilho superior em alumínio 60mm x 49,5mm, para vidro temperado', 2, 2, true);
insert into supplies values (default, '2.13.24', :renovar_depot_id::integer, 'Perfil em alumínio para acabamento de trilho superior', 2, 2, true);
insert into supplies values (default, '2.13.25', :renovar_depot_id::integer, 'Perfil guia inferior de alumínio 39,3 mm x 24 mm para vidro temperado 10mm', 2, 2, true);
insert into supplies values (default, '2.13.26', :renovar_depot_id::integer, 'Capa do Perfil Guia Inferior “Click”', 2, 2, true);
insert into supplies values (default, '2.13.27', :renovar_depot_id::integer, 'Dobradiça inferior para porta de vidro temperado', 7, 2, true);
insert into supplies values (default, '2.13.28', :renovar_depot_id::integer, 'Escova de vedação para vidro temperado', 2, 2, true);
insert into supplies values (default, '2.13.29', :renovar_depot_id::integer, 'Roldana simples para porta de correr em vidro temperado', 7, 2, true);
insert into supplies values (default, '2.13.30', :renovar_depot_id::integer, 'Roldana dupla para porta de correr em vidro temperado', 7, 2, true);
insert into supplies values (default, '2.13.31', :renovar_depot_id::integer, 'Capuchinho para trinco para vidro temperado', 7, 2, true);
insert into supplies values (default, '2.13.32', :renovar_depot_id::integer, 'Facão simples para lateral e bandeira de vidro temperado', 7, 2, true);
insert into supplies values (default, '2.13.33', :renovar_depot_id::integer, 'Fechadura de pressão para porta de abrir em vidro temperado', 7, 2, true);
insert into supplies values (default, '2.13.34', :renovar_depot_id::integer, 'Suporte de união, com miolo, para vidro temperado', 7, 2, true);
insert into supplies values (default, '2.13.35', :renovar_depot_id::integer, 'Suporte para basculante e pivotante de vidro temperado', 7, 2, true);
insert into supplies values (default, '2.13.36', :renovar_depot_id::integer, 'Trinco central para basculante em vidro temperado', 7, 2, true);
insert into supplies values (default, '2.13.37', :renovar_depot_id::integer, 'Suporte tipo “Spiderglass” para vidro temperado', 7, 2, true);
insert into supplies values (default, '2.13.38', :renovar_depot_id::integer, 'Dobradiça automática para box de vidro temperado', 7, 2, true);
insert into supplies values (default, '2.13.39', :renovar_depot_id::integer, 'Dobradiça horizontal para vidro basculante com trinco', 7, 2, true);
insert into supplies values (default, '2.13.40', :renovar_depot_id::integer, 'Dobradiça horizontal para vidro basculante', 7, 2, true);
insert into supplies values (default, '2.13.41', :renovar_depot_id::integer, 'Fechadura elétrica para porta de vidro temperado', 7, 2, true);
insert into supplies values (default, '2.13.42', :renovar_depot_id::integer, 'Porteiro eletrônico', 7, 2, true);
insert into supplies values (default, '2.13.43', :renovar_depot_id::integer, 'Acionador fixo', 7, 2, true);
insert into supplies values (default, '2.13.44', :renovar_depot_id::integer, 'Mini chapinha para trinco basculante', 7, 2, true);
insert into supplies values (default, '2.13.45', :renovar_depot_id::integer, 'Puxador de latão - diâmetro 25mm', 7, 2, true);
insert into supplies values (default, '2.13.46', :renovar_depot_id::integer, 'Trinco sem miolo para vidro temperado', 7, 2, true);
insert into supplies values (default, '2.13.47', :renovar_depot_id::integer, 'Tubo de alumínio quadrado 50x50', 2, 2, true);
insert into supplies values (default, '2.13.48', :renovar_depot_id::integer, 'Veda fresta adesivo “E” branco', 2, 2, true);
insert into supplies values (default, '2.13.49', :renovar_depot_id::integer, 'Vedapress 10mm', 2, 2, true);
insert into supplies values (default, '2.13.50', :renovar_depot_id::integer, 'Regulagem de ferragens', 7, 2, true);
insert into supplies values (default, '2.13.51', :renovar_depot_id::integer, 'Transporte de vidros', 25, 2, true);
insert into supplies values (default, '2.13.52', :renovar_depot_id::integer, 'Remoção de vidro comum / espelho', 3, 2, true);
insert into supplies values (default, '2.13.53', :renovar_depot_id::integer, 'Instalação de vidro (comum, temperado, aramado ou laminado) reaproveitado', 3, 2, true);
insert into supplies values (default, '2.13.54', :renovar_depot_id::integer, 'Instalação de espelho reaproveitado', 3, 2, true);
insert into supplies values (default, '2.13.55', :renovar_depot_id::integer, 'Vidro liso comum transparente 4mm', 3, 2, true);
insert into supplies values (default, '2.13.56', :renovar_depot_id::integer, 'Vidro liso comum transparente 5mm', 3, 2, true);
insert into supplies values (default, '2.13.57', :renovar_depot_id::integer, 'Vidro liso comum transparente 6mm', 3, 2, true);
insert into supplies values (default, '2.13.58', :renovar_depot_id::integer, 'Vidro fantasia 4mm (canelado, martelado, pontilhado e mini-boreal)', 3, 2, true);
insert into supplies values (default, '2.13.59', :renovar_depot_id::integer, 'Vidro fumê/bronze 5mm', 3, 2, true);
insert into supplies values (default, '2.13.60', :renovar_depot_id::integer, 'Vidro fumê / bronze temperado 10mm', 3, 2, true);
insert into supplies values (default, '2.13.61', :renovar_depot_id::integer, 'Espelho cristal, e=5 mm', 3, 2, true);
insert into supplies values (default, '2.13.62', :renovar_depot_id::integer, 'Espelho fumê/bronze 4mm lapidado', 3, 2, true);
insert into supplies values (default, '2.13.63', :renovar_depot_id::integer, 'Finesson (parafuso de fixação francês)', 7, 2, true);
insert into supplies values (default, '2.13.64', :renovar_depot_id::integer, 'Recuperação de massa em esquadria metálica', 2, 2, true);
insert into supplies values (default, '2.13.65', :renovar_depot_id::integer, 'Substituição da calafetação com selante', 2, 2, true);
insert into supplies values (default, '2.13.66', :renovar_depot_id::integer, 'Corte em vidro ou espelho reaproveitado', 2, 2, true);
insert into supplies values (default, '2.13.67', :renovar_depot_id::integer, 'Lapidação de vidro / espelho reaproveitado', 2, 2, true);
insert into supplies values (default, '2.13.68', :renovar_depot_id::integer, 'Baguetes metálicos', 2, 2, true);
insert into supplies values (default, '2.13.69', :renovar_depot_id::integer, 'Remoção de película', 3, 2, true);
insert into supplies values (default, '2.13.70', :renovar_depot_id::integer, 'Película jateada', 3, 2, true);
insert into supplies values (default, '2.13.71', :renovar_depot_id::integer, 'Pivô para dobradiça inferior (Montagem com a 1103-TQ)', 7, 2, true);
insert into supplies values (default, '2.13.72', :renovar_depot_id::integer, 'Dobradiça direita inferior excêntrica', 7, 2, true);
insert into supplies values (default, '2.13.73', :renovar_depot_id::integer, 'Dobradiça esquerda inferior excêntrica', 7, 2, true);
insert into supplies values (default, '2.13.74', :renovar_depot_id::integer, 'Dobradiça pivotante inferior com trinco', 7, 2, true);
insert into supplies values (default, '2.13.75', :renovar_depot_id::integer, 'Carrinho para porta de correr 1 roldana e 2 furos', 7, 2, true);
insert into supplies values (default, '2.13.76', :renovar_depot_id::integer, 'Carrinho para porta de correr 2 roldanas e 2 furos', 7, 2, true);
insert into supplies values (default, '2.13.77', :renovar_depot_id::integer, 'Carrinho para porta de correr com roldana côncava', 7, 2, true);
insert into supplies values (default, '2.13.78', :renovar_depot_id::integer, 'Guia de nylon para porta de correr', 7, 2, true);
insert into supplies values (default, '3.1', :renovar_depot_id::integer, 'Lona Plástica', 3, 1, true);
insert into supplies values (default, '3.2', :renovar_depot_id::integer, 'Fibra de Polipropileno', 5, 1, true);
insert into supplies values (default, '3.3', :renovar_depot_id::integer, 'Aditivo Incorporador de Ar', 5, 1, true);
insert into supplies values (default, '3.4', :renovar_depot_id::integer, 'Argamassa Para Contrapiso', 14, 1, true);
insert into supplies values (default, '3.5', :renovar_depot_id::integer, 'Argamassa Múltiplo Uso', 14, 1, true);
insert into supplies values (default, '3.6', :renovar_depot_id::integer, 'Cimento Portland CP II E 32', 15, 1, true);
insert into supplies values (default, '3.7', :renovar_depot_id::integer, 'Argamassa Colante tipo AC III', 13, 1, true);
insert into supplies values (default, '3.8', :renovar_depot_id::integer, 'Gesso Para Uso Geral', 14, 1, true);
insert into supplies values (default, '3.9', :renovar_depot_id::integer, 'Areia Média', 4, 1, true);
insert into supplies values (default, '3.10', :renovar_depot_id::integer, 'Brita Nº 0', 4, 1, true);
insert into supplies values (default, '3.11', :renovar_depot_id::integer, 'Brita Nº 1', 4, 1, true);
insert into supplies values (default, '3.12', :renovar_depot_id::integer, 'Brita Nº 2', 4, 1, true);
insert into supplies values (default, '3.13', :renovar_depot_id::integer, 'Bloco Cerâmico De 08 Furos', 7, 1, true);
insert into supplies values (default, '3.14', :renovar_depot_id::integer, 'Tijolo Maciço', 7, 1, true);
insert into supplies values (default, '3.15', :renovar_depot_id::integer, 'Bloco De Concreto Com 02 Furos', 7, 1, true);
insert into supplies values (default, '3.16', :renovar_depot_id::integer, 'Bloco De Concreto Tipo Canaleta', 7, 1, true);
insert into supplies values (default, '3.17', :renovar_depot_id::integer, 'Vergalhão Ca-60 Diâmetro 5,0 Mm', 2, 1, true);
insert into supplies values (default, '3.18', :renovar_depot_id::integer, 'Vergalhão Ca-50 Diâmetro 6,3 Mm', 2, 1, true);
insert into supplies values (default, '3.19', :renovar_depot_id::integer, 'Vergalhão Ca-50 Diâmetro 8,0 Mm', 2, 1, true);
insert into supplies values (default, '3.20', :renovar_depot_id::integer, 'Vergalhão Ca-50 Diâmetro 10,0 Mm', 2, 1, true);
insert into supplies values (default, '3.21', :renovar_depot_id::integer, 'Vergalhão Ca-50 Diâmetro 12,5 Mm', 2, 1, true);
insert into supplies values (default, '3.22', :renovar_depot_id::integer, 'Arame Recozido Nº 18', 5, 1, true);
insert into supplies values (default, '3.23', :renovar_depot_id::integer, 'Calha em chapa de zinco # 24 - Modelo 1', 2, 1, true);
insert into supplies values (default, '3.24', :renovar_depot_id::integer, 'Calha em chapa de zinco # 24 - Modelo 2', 2, 1, true);
insert into supplies values (default, '3.25', :renovar_depot_id::integer, 'Aditivo Impermeabilizante', 1, 1, true);
insert into supplies values (default, '3.26', :renovar_depot_id::integer, 'Massa para calafetar madeira', 5, 1, true);
insert into supplies values (default, '3.27', :renovar_depot_id::integer, 'Manta autocolante aluminizada', 3, 1, true);
insert into supplies values (default, '3.28', :renovar_depot_id::integer, 'Primer para aplicação de manta autocolante aluminizada', 1, 1, true);

-- prices

-- allocations

commit;

\unset renovar_firm_id
\unset renovar_depot_id
\unset ON_ERROR_STOP
