using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using MySql.Data.MySqlClient;

namespace prjHomeA.Soul.Pages
{
    public partial class index : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            DataBase Banco = new DataBase();

            string isRunning = Request["c"].ToString();
            if (isRunning == "false")
            {
                string Name = Request["n"];
                if (Name == "" || Name == null)
                {
                    return;

                }
                string Email = Request["e"];
                if (Email == "" || Email == null)
                {
                    return;

                }

                string Password = Request["p"];
                if (Password == "" || Password == null)
                {
                    return;

                }
                string Condominio = Request["co"];
                if (Condominio == "" || Condominio == null)
                {
                    return;

                }
                string Apartamento = Request["a"];
                if (Apartamento == "" || Apartamento == null)
                {
                    return;

                }
                string Funccao = Request["f"];
                if (Funccao == "" || Funccao == null)
                {
                    return;

                }

                int Counter = 0;
                Banco.openBar("localhost", "root", "root", "HomeA");
                Banco.getCommand("SELECT * from Usuario");
                while (Banco.Selected.Read())
                {
                    Counter++;

                }

                Banco.Refresh();
                Banco.openBar();
                Banco.setCommand("INSERT INTO Usuario VALUES('');");
                Banco.Refresh();


            } else {

            }

        }
    }
}