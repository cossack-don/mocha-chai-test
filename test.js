// Подключаем чай
const assert = chai.assert;

// describe используется для группировки отдельных тестов. 
// Первый параметр должен указывать то, что мы тестируем — в этом случае, так как мы собираемся 
// протестировать 

// внутри describe у нас будут блоки: it

// Name-test - произвольное название теста-блока
describe('Name-test', function () {

    // it функций для создания отдельных тестов — каждый из it должен объяснять одно конкретное поведение, 

    // test - произвольное название теста
    it('test',

        function () {
            // моя функция
            function go(item) {
                return item + item
            }
            // Обратите внимание, что в первой строке мы устанавливаем переменную assert . 
            // Это просто так, что нам не нужно постоянно вводить <<chai.assert>> везде.

            // Последней вещью в тесте должна быть проверка — утверждение, которое проверяет результат. 
            // Здесь мы используем <<assert.equal>> для этого. 
            assert.equal(go(3), 6);
            // пример assert.equal(моя функция, ожидаемый результат);

        });

});