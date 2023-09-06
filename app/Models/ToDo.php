<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ToDo extends Model
{
    use HasFactory;
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'to_dos';

    public function toDoDetails()
    {
        return $this->hasMany(TodoDetail::class);
    }
 
    public function delete()
    {
        // 関連するToDoDetailsのレコードを削除する
        $this->toDoDetails()->delete();

        // ToDoのレコードを削除する
        return parent::delete();
     
    }
}
