<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ToDoDetail extends Model
{
    use HasFactory;
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'to_do_details';


    public function toDo()
    {
        return $this->belongsTo(ToDo::class);
    }
    public function getCompletedFlagAttribute($value)
    {
        return $value == 1;
    }
}
