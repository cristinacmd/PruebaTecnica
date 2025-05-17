@echo off
echo === Iniciando Backend ===
cd prueba-spring
echo Compilando backend...
call mvn clean install -DskipTests
echo Levantando backend...
start cmd /k "mvn spring-boot:run"

cd ..

echo === Iniciando Frontend ===
cd prueba-angular
echo Instalando dependencias frontend...
call npm install
echo Levantando frontend en http://localhost:4200 ...
start cmd /k "npm start"

cd ..

echo === Aplicación lanzada ===
pause
