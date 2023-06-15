using FullStackAPI.Data;
using FullStackAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics;

namespace FullStackAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeesController : Controller
    {
        private readonly FullStackDbContext _fullStackDbContext;

        public EmployeesController(FullStackDbContext fullStackDbContext)
        {
            _fullStackDbContext = fullStackDbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllEmployees()
        {
            var employees = await _fullStackDbContext.Employees.ToListAsync();
            return Ok(employees);
        }

        [HttpPost]

        public async Task<IActionResult> AddEmployee([FromBody] Employee employeeRequest)
        {
            employeeRequest.Id = Guid.NewGuid();

            await _fullStackDbContext.Employees.AddAsync(employeeRequest);
            await _fullStackDbContext.SaveChangesAsync();
            return Ok(employeeRequest);

        }


        [HttpGet]
        [Route("{id:Guid}")]

        public async Task<IActionResult> GetEmployee([FromRoute] Guid id)

        {
            var employee = await _fullStackDbContext.Employees.FirstOrDefaultAsync(x => x.Id == id);
            if (employee == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(employee);
            }
        }

        [HttpPut]
        [Route("{id:Guid}")]

        public async Task<IActionResult> UpdateEmployee([FromRoute] Guid id, Employee updateEmployeeRequest)
        {
            var employee = await _fullStackDbContext.Employees.FirstOrDefaultAsync(x => x.Id == id);

            if (employee == null)
            {
                return NotFound();
            }
            else
            {
                employee.Name = updateEmployeeRequest.Name;
                employee.Phone = updateEmployeeRequest.Phone;
                employee.Email = updateEmployeeRequest.Email;
                employee.salary = updateEmployeeRequest.salary;
                employee.Department = updateEmployeeRequest.Department;

                await _fullStackDbContext.SaveChangesAsync();

                return Ok(employee);

            }
        }


        [HttpDelete]
        [Route("{id:Guid}")]

        public async Task<IActionResult> DeleteEmployee([FromRoute] Guid id)
        {
            var employee = await _fullStackDbContext.Employees.FirstOrDefaultAsync(x => x.Id == id);

            if(employee == null)
            {
                return NotFound();
            }
            else
            {
                _fullStackDbContext.Employees.Remove(employee);
                await _fullStackDbContext.SaveChangesAsync();
                return Ok();
            }
        }

        [HttpPost]
        [Route("prompt/{prompt}")]
        public IActionResult UpdatedPrompt([FromRoute] string prompt, Bard updateBardRequest)
        {
            updateBardRequest.promptedQuery = prompt;
            //print the prompt to the console
            Debug.WriteLine(prompt);
            updateBardRequest.promptedResponse = "I am a Bard";

            return Ok(updateBardRequest);
        }







    }
}
