/**
 * Created by emelyanchik on 11/07/2017.
 */
suite('Global Tests', function(){
    test('У данной страницы допустимый заголовок', function(){
        assert(document.title && document.title.match(/\S/) &&
            document.title.toUpperCase() !== 'TODO');
    }); });