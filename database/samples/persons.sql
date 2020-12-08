insert into persons values (1, 'hzlopes', '00000000001', 'hzlopes@senado.leg.br', 'Henrique Zaidan Lopes', '2339', null, crypt('123456', gen_salt('bf', 10)), true, 'administrator');
insert into persons values (2, 'pedrohs', '00000000002', 'pedrohs@senado.leg.br', 'Pedro Henrique Serafim', '2339', null, crypt('123456', gen_salt('bf', 10)), true, 'administrator');
insert into persons values (3, 'person3', '00000000003', 'person3@senado.leg.br', 'Person3 Administrator', '1234', null, crypt('123456', gen_salt('bf', 10)), true, 'administrator');
insert into persons values (4, 'person4', '00000000004', 'person4@senado.leg.br', 'Person4 Supervisor', '1234', null, crypt('123456', gen_salt('bf', 10)), true, 'supervisor');
insert into persons values (5, 'person5', '00000000005', 'person5@senado.leg.br', 'Person5 Supervisor', '1234', null, crypt('123456', gen_salt('bf', 10)), true, 'inspector');
insert into persons values (6, 'person6', '00000000006', 'person6@senado.leg.br', 'Person6 Inspector', '1234', null, crypt('123456', gen_salt('bf', 10)), true, 'employee');
