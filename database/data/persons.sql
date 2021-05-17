insert into persons values (1, 'hzlopes', '00000000001', 'hzlopes@senado.leg.br', 'Henrique Zaidan Lopes', '2339', null, ext.crypt('123456', get_random_salt()), 'supervisor');
insert into persons values (2, 'pedrohs', '00000000002', 'pedrohs@senado.leg.br', 'Pedro Henrique Serafim', '2339', null, ext.crypt('123456', get_random_salt()), 'supervisor');

insert into teams values (1, 'COEMANT', 'Equipe da COEMANT', true);

insert into team_persons values (1,1);
insert into team_persons values (1,2);

update persons set team_id = 1;
