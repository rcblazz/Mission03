using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission02.Models
{
    public class CalculatorModel
    {
        [Required]  // validation for required field
        [Range(1, 100)] // limits user to enter value between 1 and 100
        public decimal Assignments { get; set; } // this does the getting and setting for you

        [Required]
        [Range(1, 100)]
        public decimal GroupProject { get; set; }


        [Required]
        [Range(1, 100)]
        public decimal Quizzes { get; set; }


        [Required]
        [Range(1, 100)]
        public decimal Exams { get; set; }


        [Required]
        [Range(1, 100)]
        public decimal INTEX { get; set; }

    }
}


