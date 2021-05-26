insert into teams values (default, 'COEMANT', 'Equipe da COEMANT', true);

insert into persons values (default, 'hzlopes', '00000000001', 'hzlopes@senado.leg.br', 'Henrique Zaidan Lopes', '2339', null, ext.crypt('123456', get_random_salt()), 'supervisor', 1);
insert into persons values (default, 'pedrohs', '00000000002', 'pedrohs@senado.leg.br', 'Pedro Henrique Serafim', '2339', null, ext.crypt('123456', get_random_salt()), 'supervisor', 1);

insert into team_persons values (1,1);
insert into team_persons values (1,2);
