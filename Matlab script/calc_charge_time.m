function calc_charge_time

f = figure('position',[600,500,700,500]);

n = uicontrol();
n.Style = 'Pushbutton';
n.Position = [15,450,100,35];
n.String = '50kw';
n.Callback = @graf1;

h = uicontrol();
h.Style = 'Pushbutton';
h.Position = [135,450,100,35];
h.String = '150kw';
h.Callback = @graf2;

f = uicontrol();
f.Style = 'Pushbutton';
f.Position = [250,450,100,35];
f.String = '250kw';
f.Callback = @graf3;

p = uicontrol();
p.Style = 'pushbutton';
p.Position = [365,450,100,35];
p.String = 'zoom in';
p.Callback = @zoomin;


k = uicontrol();
k.Style = 'pushbutton';
k.Position = [480,450,100,35];
k.String = 'zoom ut';
k.Callback = @zoomout;

function graf1(source, eventdata)

x= [70,140,210];
y = (x/50);
pos = [0.065 0.085 0.7 0.75]; 
subplot('Position',pos);
b = bar(x,diag(y),'stacked');
title('Graf over forventet ladetid ved ladeeffekt på 50kw')
xlabel('Baterikapasitet') 
ylabel('Tid i timer') 

function graf2(source, eventdata)

x= [70,140,210];
y = (x/150);
pos = [0.065 0.085 0.7 0.75]; 
subplot('Position',pos);
b = bar(x,diag(y),'stacked');
title('Graf over forventet ladetid ved ladeeffekt på 150kw')
xlabel('Baterikapasitet') 
ylabel('Tid i timer') 

function graf3(source, eventdata)

x= [70,140,210];
y = (x/250);
pos = [0.065 0.085 0.7 0.75]; 
subplot('Position',pos);
b = bar(x,diag(y),'stacked');
title('Graf over forventet ladetid ved ladeeffekt på 250kw')
xlabel('Baterikapasitet') 
ylabel('Tid i timer') 

function zoomin(source, eventdata)
camzoom(1.25)

function zoomout(source,eventdata)
camzoom(0.75)


