using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using MySql.Data.MySqlClient;

namespace prjHomeA.Soul.Pages
{
    public partial class addUser : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            DataBase Banker = new DataBase();
            Banker.openBar("localhost", "root", "root", "HomeA");
            Banker.getCommand("SELECT * FROM Usuario");
            string Secco = "";
            while (Banker.Selected.Read())
            {
                Secco += Banker.Selected["nm_usuario"] + "☺" + Banker.Selected["nm_email_usuario"] + "☻" + 
                
            }

        }
    }
}