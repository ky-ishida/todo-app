<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ToDo;
use App\Models\ToDoDetail;


class SearchController extends Controller
{
    public function search(Request $request){
        // 検索欄から内容を取得する
        $query = $request->get('query');

        // 取得した内容からそれぞれ値を取得する
        $toDos = ToDo::where('title', 'LIKE', "%{$query}%")->with('toDoDetails')->get();
        $toDoDetails = ToDoDetail::where('name', 'LIKE', "%{$query}%")->with('toDo')->get();
    
        return response()->json(['toDos' => $toDos, 'toDoDetails' => $toDoDetails]);
    }
}
